<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Administrador;
use App\Models\HostTuristico;
use App\Models\PromotorTuristico;
use App\Models\SuperAdmin;
use App\Models\UsuarioComum;
use App\Models\Credenciais;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function autenticar(Request $request){

    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'senha' => 'required'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'validado' => false,
            'error' => $validator->errors()
        ], 422);
    }

    
    $email = $request->email;
    $senha = $request->senha;


    $user = new Credenciais();
    $usuario = $user->where('email', $email)->where('senha', $senha)->first();

    if(!isset($usuario)){
        return response()->json(['error' => 'e-mail ou senha incorretos.']);
    }

    if ( $usuario->tipo == 'usuario comum') {
        $codCredencial = $usuario->codCredencial;
        $selectUser = new UsuarioComum();
        $usuarioComum = UsuarioComum::where('fk_credencial_codCredencial', $codCredencial)->get()->first();
        $codUsuario = $usuarioComum->codUsuario;
        $usuarioTipo = $usuario->tipo;
        $usuarioNome = $usuarioComum->nome;

        return response()->json(['validado' => true, 'id' => $codUsuario, 'tipo' => $usuarioTipo, 'nome' => $usuarioNome]);
    } 

    if ( $usuario->tipo == 'super administrador') {
        $codCredencial = $usuario->codCredencial;
        $selectSuper = new SuperAdmin();
        $superAdmin = SuperAdmin::where('fk_credencial_codCredencial', $codCredencial)->get()->first();
        $codSuper = $superAdmin->codSuper;
        $usuarioTipo = $usuario->tipo;
        $superNome = $superAdmin->nome;

        return response()->json(['validado' => true, 'id' => $codSuper, 'tipo' => $usuarioTipo, 'nome' => $superNome]);
    } 

    if ( $usuario->tipo == 'administrador') {
        $codCredencial = $usuario->codCredencial;
        $selectAdmin = new Administrador();
        $administrador = Administrador::where('fk_credencial_codCredencial', $codCredencial)->get()->first();
        $codAdmin = $administrador->codAdmin;
        $usuarioTipo = $usuario->tipo;
        $adminNome = $administrador->nome;

        return response()->json(['validado' => true, 'id' => $codAdmin, 'tipo' => $usuarioTipo, 'nome' => $adminNome]);
    } 


    if ( $usuario->tipo == 'host turistico') {
        $codCredencial = $usuario->codCredencial;
        $selectHost = new HostTuristico();
        $hostTuristico = HostTuristico::where('fk_credencial_codCredencial', $codCredencial)->get()->first();
        $codHost = $hostTuristico->codHost;
        $usuarioTipo = $usuario->tipo;
        $hostNome = $hostTuristico->nome;

        return response()->json(['validado' => true, 'id' => $codHost, 'tipo' => $usuarioTipo, 'nome' => $hostNome]);
    }
    
        if ( $usuario->tipo == 'promotor turistico') {
        $codCredencial = $usuario->codCredencial;
        $selectPromotor = new PromotorTuristico();
        $promotorTuristico = PromotorTuristico::where('fk_credencial_codCredencial', $codCredencial)->get()->first();
        $codPromotor = $promotorTuristico->codPromotor;
        $usuarioTipo = $usuario->tipo;
        $promotorNome = $promotorTuristico->nome;

        return response()->json(['validado' => true, 'id' => $codPromotor, 'tipo' => $usuarioTipo, 'nome' => $promotorNome]);
    } 

    return response()->json(['validado' => false, 'mensagem' => 'Tipo de usuário não permitido.'], 403);
    }

    
}
