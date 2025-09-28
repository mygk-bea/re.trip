<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Evento;
use App\Models\LocaisEvento;

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

        $codEvento = $evento->codEvento;

        $locais = $request->input('locais', []);
        
        if (!empty($locais)) {
            foreach ($locais as $local) {
                $locais_evento = new LocaisEvento();
                $locais_evento->fk_local_codLocal = $local;
                $locais_evento->fk_evento_codEvento = $codEvento;
                $locais_evento->save();
            }
        }
    }    
}
