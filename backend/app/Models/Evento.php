<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = "evento";

    protected $primaryKey = 'codEvento';

    protected $fillable = [
        'codEvento',
        'data_hora',
        'id_autor',
        'descricao',
        'endereco',
        'cidade'
    ];
}
