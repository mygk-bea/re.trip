<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Local;
use App\Models\TagsLocal;

class LocalController extends Controller
{
    public function store(Request $request){
        $local = new Local();
        $local->nome = $request->input('nome');
        $local->logradouro = $request->input('logradouro');
        $local->bairro = $request->input('bairro');
        $local->numero = $request->input('numero');
        $local->telefone = $request->input('telefone');
        $local->imagem = $request->input('imagem');
        $local->cidade = $request->input('cidade');
        $local->descricao = $request->input('descricao');
        $local->disponibilidade = $request->input('disponibilidade');
        $local->cnpj = $request->input('cnpj');
        $local->id_autor = $request->input('id_autor');
        $local->save();

        $codLocal = $local->codLocal;

        $tags = $request->input('tags', []); 
        foreach ($tags as $tag) {
            $tags_local = new TagsLocal();
            $tags_local->fk_tag_codTag = $tag;
            $tags_local->fk_local_codLocal = $codLocal;
            $tags_local->save();
        }
    } 
}
