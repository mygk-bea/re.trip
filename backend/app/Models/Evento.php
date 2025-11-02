<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = "evento";

    protected $primaryKey = 'codEvento';

    protected $fillable = [
        'codEvento',
        'nome',
        'data',
        'hora',
        'fk_credencial_autor',
        'descricao',
        // 'logradouro',
        // 'bairro',
        // 'numero',
        // 'cidade',
        'imagem'
    ];
}
