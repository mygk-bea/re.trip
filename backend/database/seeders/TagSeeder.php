<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Tag;
use Carbon\Carbon;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            ['nome' => 'Local Turístico', 'tipo' => 'atração'],
            ['nome' => 'Guia Turístico', 'tipo' => 'atração'],
            ['nome' => 'Rota Turística', 'tipo' => 'atração'],
            ['nome' => 'Gastronômica', 'tipo' => 'atração'],
            ['nome' => 'Cultural', 'tipo' => 'atração'],
            ['nome' => 'Compras', 'tipo' => 'atração'],
            ['nome' => 'Natureza e Ecoturismo', 'tipo' => 'atração'],
            ['nome' => 'Aventura e Diversão', 'tipo' => 'atração'],
            ['nome' => 'Histórico', 'tipo' => 'atração'],
            ['nome' => 'Religioso', 'tipo' => 'atração'],

            ['nome' => 'Bofete', 'tipo' => 'localização'],
            ['nome' => 'Boituva', 'tipo' => 'localização'],
            ['nome' => 'Botucatu', 'tipo' => 'localização'],
            ['nome' => 'Cesário Lange', 'tipo' => 'localização'],
            ['nome' => 'Cerquilho', 'tipo' => 'localização'],
            ['nome' => 'Itapetininga', 'tipo' => 'localização'],
            ['nome' => 'Tatuí', 'tipo' => 'localização'],
            ['nome' => 'Tietê', 'tipo' => 'localização'],
            ['nome' => 'Torre de Pedra', 'tipo' => 'localização'],
            ['nome' => 'Outras', 'tipo' => 'localização'],
            ['nome' => 'Centro', 'tipo' => 'localização'],
            ['nome' => 'Próximo à natureza', 'tipo' => 'localização'],
            ['nome' => 'Urbano', 'tipo' => 'localização'],
            ['nome' => 'Transporte Público', 'tipo' => 'localização'],
            
            ['nome' => 'Vaga Comum', 'tipo' => 'acessibilidade e inclusão'],
            ['nome' => 'Vaga DeFis', 'tipo' => 'acessibilidade e inclusão'],
            ['nome' => 'Cadeirante', 'tipo' => 'acessibilidade e inclusão'],
            ['nome' => 'Braile', 'tipo' => 'acessibilidade e inclusão'],
            ['nome' => 'Áudio Descrição', 'tipo' => 'acessibilidade e inclusão'],
            ['nome' => 'Pet Friendly', 'tipo' => 'acessibilidade e inclusão'],
            ['nome' => 'Banheiros', 'tipo' => 'acessibilidade e inclusão'],
            ['nome' => 'Elevadores e Rampas', 'tipo' => 'acessibilidade e inclusão'],
        ];

        foreach ($tags as $tag) {
            DB::table('tag')->insert([
                'nome' => $tag['nome'],
                'tipo' => $tag['tipo'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}