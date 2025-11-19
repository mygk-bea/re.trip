<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Local;
use App\Models\Imagens;
use App\Models\ImagemDestinatario;

class LocaisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $locais = [
            [ 'codLocal'       => 1,
                'nome'           => 'Parque da Cidade de Boituva',
                'logradouro'     => 'Av. Pereira Ignácio',
                'bairro'         => 'Centro',
                'numero'         => 'S/N',
                'cep'            => '18550-000',
                'telefone'       => '(15) 3263-2020',
                'cidade'         => 'Boituva',
                'descricao'      => 'Parque urbano com pistas de caminhada e lago.',
                'disponibilidade'=> 'Aberto',
                'avaliacao'      => 4.6,
                'cnpj'           => '22.222.222/0001-22',
            'fk_credencial_autor' => 3],
                [
                'codLocal'       => 2,
                'nome'           => 'Centro Nacional de Paraquedismo',
                'logradouro'     => 'Alameda Lima',
                'bairro'         => 'Portal dos Pássaros',
                'numero'         => '300',
                'cep'            => '18550-000',
                'telefone'       => '(15) 3363-9999',
                'cidade'         => 'Boituva',
                'descricao'      => 'Maior centro de paraquedismo da América Latina.',
                'disponibilidade'=> 'Aberto',
                'avaliacao'      => 4.9,
                'cnpj'           => '33.333.333/0001-33',
            'fk_credencial_autor' => 3
            ],
            [
                'codLocal'       => 3,
                'nome'           => 'Fazenda Ipanema - Flona de Iperó',
                'logradouro'     => 'Estrada da Arcelor',
                'bairro'         => 'Zona Rural',
                'numero'         => 'Km 12',
                'cep'            => '18560-000',
                'telefone'       => '(15) 3459-5050',
                'cidade'         => 'Iperó',
                'descricao'      => 'Área histórica com trilhas e construções do século XIX.',
                'disponibilidade'=> 'Aberto',
                'avaliacao'      => 4.7,
                'cnpj'           => '44.444.444/0001-44',
            'fk_credencial_autor' => 3
            ],
            [
                'codLocal'       => 4,
                'nome'           => 'Lago Municipal de Cerquilho',
                'logradouro'     => 'Av. Corradi Pereira',
                'bairro'         => 'Centro',
                'numero'         => 'S/N',
                'cep'            => '18520-000',
                'telefone'       => '(15) 3384-1414',
                'cidade'         => 'Cerquilho',
                'descricao'      => 'Lago com pista de cooper e área de convivência.',
                'disponibilidade'=> 'Aberto',
                'avaliacao'      =>  4.3,
                'cnpj'           => '55.555.555/0001-55',
            'fk_credencial_autor' => 3
            ]
        ];

        $imgs = [
            [
                'codImagem' => 1,
                'tipo' => 'local',
                'nome' => 'parque_ecologico_boituva.jpg'
            ],
            [
                'codImagem' => 2,
                'tipo' => 'local',
                'nome' => 'paraquedismo_boituva.jpg'
            ],
            [
                'codImagem' => 3,
                'tipo' => 'local',
                'nome' => 'flona-de-ipanema.jpg'
            ],
            [
                'codImagem' => 4,
                'tipo' => 'local',
                'nome' => 'parque_cerquilho.jpg'
            ]
        ];

        $imgdest = [
            ['codImagemDestinario' => 1,
            'fk_imagem_codImagem' => 1,
            'id_destinatario' => 1,
            'tipo_destinatario' => 'local'],
            ['codImagemDestinario' => 2,
            'fk_imagem_codImagem' => 2,
            'id_destinatario' => 2,
            'tipo_destinatario' => 'local'],
                        ['codImagemDestinario' => 3,
            'fk_imagem_codImagem' => 3,
            'id_destinatario' => 3,
            'tipo_destinatario' => 'local'],
                        ['codImagemDestinario' => 4,
            'fk_imagem_codImagem' => 4,
            'id_destinatario' => 4,
            'tipo_destinatario' => 'local'],
        ];

        // Inserir locais
foreach ($locais as $local) {
    DB::table('local')->insert([
        'codLocal'            => $local['codLocal'],
        'nome'                => $local['nome'],
        'logradouro'          => $local['logradouro'],
        'bairro'              => $local['bairro'],
        'numero'              => $local['numero'],
        'cep'                 => $local['cep'],
        'telefone'            => $local['telefone'],
        'cidade'              => $local['cidade'],
        'descricao'           => $local['descricao'],
        'disponibilidade'     => $local['disponibilidade'],
        'avaliacao'           => $local['avaliacao'],
        'cnpj'                => $local['cnpj'],
        'fk_credencial_autor' => $local['fk_credencial_autor'],
        'created_at'          => Carbon::now(),
        'updated_at'          => Carbon::now(),
    ]);
}

// Inserir imagens
foreach ($imgs as $img) {
    DB::table('imagens')->insert([
        'codImagem'  => $img['codImagem'],
        'tipo'       => $img['tipo'],
        'nome'       => $img['nome'],
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
    ]);
}

// Inserir imagem_destinatario
foreach ($imgdest as $dest) {
    DB::table('relacao_imagem_destinatario')->insert([
        'codImagemDestinario'  => $dest['codImagemDestinario'],
        'fk_imagem_codImagem'  => $dest['fk_imagem_codImagem'],
        'id_destinatario'      => $dest['id_destinatario'],
        'tipo_destinatario'    => $dest['tipo_destinatario'],
        'created_at'           => Carbon::now(),
        'updated_at'           => Carbon::now(),
    ]);
}

    }
}
