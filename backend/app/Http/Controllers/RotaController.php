<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Rota;
use App\Models\RotaLocais;
use App\Models\Imagens;
use App\Models\ImagemDestinatario;
use App\Models\UsuarioComum;
use App\Models\Credenciais;

class RotaController extends Controller
{
    public function store(Request $request){
        $rota = new Rota();
        $rota->nome = $request->input('nome');
        $rota->privada = $request->input('privada');
        $rota->fk_credencial_autor = $request->input('credencial_autor');
        $rota->guiado = $request->input('guiado', false);
        $rota->distancia_total = $request->input('distancia_total', 0);

        if($rota->guiado == true){
            $rota->valor = $request->input('valor');
        }

        $rota->save();

        $codRota = $rota->codRota;

        $locais = $request->input('locais', []);

        if (!empty($locais)) {
            foreach ($locais as $local) {
                $locais_rota = new RotaLocais();
                $locais_rota->fk_local_codLocal = $local;
                $locais_rota->fk_rota_codRota = $codRota;
                $locais_rota->save();
            }
        }

        $imagemNome = $request->input('imagemNome');
        if (!empty($imagemNome) && trim($imagemNome) !== '') {
            $imagem = new Imagens();
            $imagemDestinatario = new ImagemDestinatario();
            $imagem->tipo = 'rota';
            $imagem->nome = $imagemNome;
            $imagem->save();

            $codImagem = $imagem->codImagem;

            $imagemDestinatario->fk_imagem_codImagem = $codImagem;
            $imagemDestinatario->id_destinatario = $codRota;
            $imagemDestinatario->tipo_destinatario = $imagem->tipo;
            $imagemDestinatario->save();
        }    
        
            return response()->json([
        'success' => true,
        'message' => 'Rota cadastrada com sucesso'
    ]);
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

public function dadosRotas($credencialUsuario){
    $rotas = Rota::where('fk_credencial_autor', $credencialUsuario)->get();

    $rotasDados = [];
    foreach ($rotas as $rota) {
        $locaisIds = RotaLocais::where('fk_rota_codRota', $rota->codRota)->pluck('fk_local_codLocal')->toArray();
        $imagem = ImagemDestinatario::where('id_destinatario', $rota->codRota)->where('tipo_destinatario', 'rota')->first();
        $imagemNome = null;
        
        if ($imagem) {
            $imagemData = Imagens::find($imagem->fk_imagem_codImagem);
            $imagemNome = $imagemData ? $imagemData->nome : null;
        }

        $rotasDados[] = [
            'rota' => $rota,
            'locais' => $locaisIds,
            'imagem' => $imagemNome
        ];
    }

    return response()->json([
        'success' => true,
        'data' => $rotasDados,
        'total' => count($rotasDados)
    ]);

}
    public function status(Request $request){
        
    }
}
