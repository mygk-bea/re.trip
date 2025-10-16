<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\UsuarioComum;
use App\Models\Credenciais;

class UsuarioComumController extends Controller
{
    public function store(Request $request){
        $credencial = new Credenciais();
        $credencial->tipo = "usuario comum";
        $credencial->email = $request->input('email');
        $credencial->senha = $request->input('senha');
        $credencial->save();

        $codCredencial = $credencial->codCredencial;

        $usuario = new UsuarioComum();
        $usuario->nome = $request->input('nome');
        $usuario->genero = $request->input('genero');
        $usuario->dataNascimento = $request->input('dataNascimento');
        $usuario->fk_credencial_codCredencial = $codCredencial;
        $usuario->save();

        return response()->json(['validado' => true]);
    }
}
