<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PromotorTuristico;
use App\Models\Credenciais;

class PromotorTuristicoController extends Controller
{
    public function store(Request $request){
        $credencial = new Credenciais();
        $credencial->tipo = "promotor turistico";
        $credencial->email = $request->input('email');
        $credencial->senha = $request->input('senha');
        $credencial->save();

        $codCredencial = $credencial->codCredencial;

        $usuario = new PromotorTuristico();
        $usuario->nome = $request->input('nome');
        $usuario->cpf = $request->input('cpf');
        $usuario->dataNascimento = $request->input('dataNascimento');
        $usuario->fk_credencial_codCredencial = $codCredencial;
        $usuario->save();
    }    
}
