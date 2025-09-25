<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Rota;
use App\Models\RotaLocais;

class RotaController extends Controller
{
    public function store(Request $request){
        $rota = new Rota();
        $rota->nome = $request->input('nome');
        $rota->privada = $request->input('privada');
        $rota->imagem = $request->input('imagem');
        $rota->distancia_total = $request->input('distancia_total');
        $rota->id_autor = $request->input('id_autor');
        $rota->guiado = $request->input('guiado');

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
    } 
}
