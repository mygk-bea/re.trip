<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\UsuarioComum;

class UsuarioComumController extends Controller
{
    public function store(Request $request){
        $usuario = new UsuarioComum();
        $usuario->nome = $request->input('nome');
        $usuario->genero = $request->input('genero');
        $usuario->dataNascimento = $request->input('dataNascimento');
        $usuario->email = $request->input('email');
        $usuario->senha = $request->input('senha');
        $usuario->save();
    }
}
