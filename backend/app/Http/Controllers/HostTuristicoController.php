<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\HostTuristico;

class HostTuristicoController extends Controller
{
    public function store(Request $request){
        $usuario = new HostTurisco();
        $usuario->nome = $request->input('nome');
        $usuario->genero = $request->input('cpf');
        $usuario->dataNascimento = $request->input('dataNascimento');
        $usuario->email = $request->input('email');
        $usuario->senha = $request->input('senha');
        $usuario->save();
    }    
}
