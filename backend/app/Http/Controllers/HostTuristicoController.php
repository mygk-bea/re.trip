<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\HostTuristico;
use App\Models\Credenciais;

class HostTuristicoController extends Controller
{
    public function store(Request $request){
        $credencial = new Credenciais();
        $credencial->email = $request->input('email');
        $credencial->senha = $request->input('senha');
        $credencial->tipo = "host turistico";
        $credencial->save();

        $codCredencial = $credencial->codCredencial;
        
        $usuario = new HostTuristico();
        $usuario->nome = $request->input('nome');
        $usuario->cpf = $request->input('cpf');
        $usuario->dataNascimento = $request->input('dataNascimento');
        $usuario->fk_credencial_codCredencial = $codCredencial;
        $usuario->save();

    }    
}
