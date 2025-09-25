<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

// Rotas de cadastro
$router->post('/cadastro-usuario-comum', 'UsuarioComumController@store');
$router->post('/cadastro-administrador', 'AdministradorController@store');
$router->post('/cadastro-host-turistico', 'HostTuristicoController@store');
$router->post('/cadastro-promotor-turistico', 'PromotorTuristicoController@store');
$router->post('/cadastro-evento', 'EventoController@store');
$router->post('/cadastro-local', 'LocalController@store');
$router->post('/cadastro-rota', 'RotaController@store');