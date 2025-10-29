<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Local;
use App\Models\TagsLocal;
use App\Models\Imagens;
use App\Models\ImagemDestinatario;

class LocalController extends Controller
{
    public function store(Request $request){
        $local = new Local();
        $local->nome = $request->input('nome');
        $local->logradouro = $request->input('logradouro');
        $local->bairro = $request->input('bairro');
        $local->numero = $request->input('numero');
        $local->telefone = $request->input('telefone');
        $local->cidade = $request->input('cidade');
        $local->cep = $request->input('cep');
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

        $imagens = $request->input('imagensNome', []); 
        foreach ($imagens as $img) {
            $imagem = new Imagens();
            $imagemDestinatario = new ImagemDestinatario();
            $imagem->tipo = 'local';
            $imagem->nome = $img;
            $imagem->save();

            $codImagem = $imagem->codImagem;

            $imagemDestinatario->fk_imagem_codImagem = $codImagem;
            $imagemDestinatario->id_destinatario = $codLocal;
            $imagemDestinatario->tipo_destinatario = $imagem->tipo;
            $imagemDestinatario->save();
        }

    } 

    public function upload(Request $request){

        $files = $request->file('imagem');

        if (!$files) {
            return response()->json(['error' => 'Nenhuma imagem enviada'], 400);
        }

        if (!is_array($files)) {
            $files = [$files];
        }

        $nomes = []; 
        $uploadPath = __DIR__ . '/../../../public/uploads';
        
        if (!file_exists($uploadPath)) {
            mkdir($uploadPath, 0755, true);
        }

        foreach ($files as $file) {
            if ($file->isValid()) {
                $nomeArquivo = uniqid() . '.' . $file->getClientOriginalExtension();
                $file->move($uploadPath, $nomeArquivo);
                $nomes[] = $nomeArquivo;
            }
        }

        return response()->json(['imagem' => $nomes]);
    }
}