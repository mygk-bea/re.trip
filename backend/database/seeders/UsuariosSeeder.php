<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\UsuarioComum;
use App\Models\Administrador;
use App\Models\SuperAdmin;
use App\Models\Credenciais;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $credenciais = [['tipo' => 'usuario comum', 'email' => 'neusa@gmail.com', 'senha' => "123456"],
        ['tipo' => 'usuario comum', 'email' => 'caio@gmail.com', 'senha' => "123456"],
        ['tipo' => 'administrador', 'email' => 'dina@gmail.com', 'senha' => "123456"],
        ['tipo' => 'administrador', 'email' => 'joana@gmail.com', 'senha' => "123456"], 
        ['tipo' => 'super administrador', 'email' => 'rafael@gmail.com', 'senha' => "123456"],
        ['tipo' => 'super administrador', 'email' => 'juliana@gmail.com', 'senha' => "123456"],   
        ];

        $usuariosComum = [
            ['nome'=> 'Neusa', 'genero' => 'Feminino', 'dataNascimento' => '1999-05-23', 'fk_credencial_codCredencial' => 1],
            ['nome'=> 'Caio', 'genero' => 'Masculino', 'dataNascimento' => '1999-05-23', 'fk_credencial_codCredencial' => 2]
        ];

        $administradores = [
            ['nome'=> 'Dina', 'cpf' => '12833874', 'dataNascimento' => '1999-05-23', 'fk_credencial_codCredencial' => 3],
            ['nome'=> 'Joana', 'cpf' => '12833874', 'dataNascimento' => '1999-05-23', 'fk_credencial_codCredencial' => 4]
        ];

        $superAdministradores = [
            ['nome'=> 'Rafael', 'cpf' => '12833874', 'dataNascimento' => '1999-05-23', 'fk_credencial_codCredencial' => 5],
            ['nome'=> 'Juliana', 'cpf' => '12833874', 'dataNascimento' => '1999-05-23', 'fk_credencial_codCredencial' => 6]
        ];

        foreach ($credenciais as $credencial) {
            DB::table('credenciais')->insert([
                'tipo' => $credencial['tipo'],
                'email' => $credencial['email'],
                'senha' => $credencial['senha'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        foreach ($usuariosComum as $usuario) {
            DB::table('usuario_comum')->insert([
                'nome' => $usuario['nome'],
                'genero' => $usuario['genero'],
                'dataNascimento' => $usuario['dataNascimento'],
                'fk_credencial_codCredencial' => $usuario['fk_credencial_codCredencial'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        foreach ($administradores as $admin) {
            DB::table('administrador')->insert([
                'nome' => $admin['nome'],
                'cpf' => $admin['cpf'],
                'dataNascimento' => $admin['dataNascimento'],
                'fk_credencial_codCredencial' => $admin['fk_credencial_codCredencial'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        foreach ($superAdministradores as $superAdmin) {
            DB::table('super_admin')->insert([
                'nome' => $admin['nome'],
                'cpf' => $admin['cpf'],
                'dataNascimento' => $admin['dataNascimento'],
                'fk_credencial_codCredencial' => $admin['fk_credencial_codCredencial'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
