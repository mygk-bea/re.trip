<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rota extends Model
{
    protected $table = "rota";

    protected $primaryKey = 'codRota';

    protected $fillable = [
        'codRota',
        'compartilhada',
        'nome',
        'privada',
        'imagem',
        'distancia_total',
        'avaliacao',
        'status',
        'fk_credencial_autor',
        'favoritada',
        'guiado',
        'valor',
        'comentario'
    ]; 
}
