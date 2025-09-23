<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Evento;

class EventoController extends Controller
{
    public function store(Request $request){
        $evento = new Evento();
        $evento->data = $request->input('data');
        $evento->hora = $request->input('hora');
        $evento->id_autor = $request->input('id_autor');
        $evento->descricao = $request->input('descricao');
        $evento->logradouro = $request->input('logradouro');
        $evento->bairro = $request->input('bairro');
        $evento->numero = $request->input('numero');
        $evento->cidade = $request->input('cidade');
        $evento->imagem = $request->input('imagem');
        $evento->save();
    }    
}
