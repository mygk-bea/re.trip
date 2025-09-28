<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = "evento";

    protected $primaryKey = 'codEvento';

    protected $fillable = [
        'codEvento',
        'data',
        'hora',
        'id_autor',
        'descricao',
        'logradouro',
        'bairro',
        'numero',
        'cidade',
        'imagem'
    ];
}
