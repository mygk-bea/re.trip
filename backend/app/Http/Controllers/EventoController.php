<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Evento;
use App\Models\LocaisEvento;
use App\Models\TagsEvento;
use App\Models\Imagens;
use App\Models\ImagemDestinatario;
use App\Models\Administrador;
use App\Models\Credenciais;

class EventoController extends Controller
{
    public function store(Request $request){
        $evento = new Evento();
        $evento->nome = $request->input('nome');
        $evento->data = $request->input('data');
        $evento->hora = $request->input('hora');
        $evento->fk_credencial_autor = $request->input('credencial_autor');
        $evento->descricao = $request->input('descricao');
        // $evento->logradouro = $request->input('logradouro');
        // $evento->bairro = $request->input('bairro');
        // $evento->numero = $request->input('numero');
        // $evento->cidade = $request->input('cidade');
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

        $tags = $request->input('tags', []); 
        foreach ($tags as $tag) {
            $tags_evento = new TagsEvento();
            $tags_evento->fk_tag_codTag = $tag;
            $tags_evento->fk_evento_codEvento = $codEvento;
            $tags_evento->save();
        }

        $imagens = $request->input('imagensNomes', []); 
        foreach ($imagens as $img) {
            $imagem = new Imagens();
            $imagemDestinatario = new ImagemDestinatario();
            $imagem->tipo = 'evento';
            $imagem->nome = $img;
            $imagem->save();

            $codImagem = $imagem->codImagem;

            $imagemDestinatario->fk_imagem_codImagem = $codImagem;
            $imagemDestinatario->id_destinatario = $codEvento;
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

    public function dadosEventos($credencialUsuario){
        $eventos = Evento::where('fk_credencial_autor', $credencialUsuario)->get();

        $eventosDados = [];
        foreach ($eventos as $evento) {
            $locaisIds = LocaisEvento::where('fk_evento_codEvento', $evento->codEvento)->pluck('fk_local_codLocal')->toArray();
            $tagsIds = TagsEvento::where('fk_evento_codEvento', $evento->codEvento)->pluck('fk_tag_codTag')->toArray();
            
            $imagens = ImagemDestinatario::where('id_destinatario', $evento->codEvento)->where('tipo_destinatario', 'evento')->get();
            $imagensNomes = [];
            
            foreach ($imagens as $imagem) {
                $imagemData = Imagens::find($imagem->fk_imagem_codImagem);
                if ($imagemData) {
                    $imagensNomes[] = $imagemData->nome;
                }
            }

            $eventosDados[] = [
                'evento' => $evento,
                'locais' => $locaisIds,
                'tags' => $tagsIds,
                'imagens' => $imagensNomes
            ];
        }

        return response()->json([
            'success' => true,
            'data' => $eventosDados,
            'total' => count($eventosDados)
        ]);
    }
}
