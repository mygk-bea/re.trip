<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Imagens extends Model
{
    protected $table = "imagens";

    protected $primaryKey = 'codImagem';

    protected $fillable = [
        'codImagem',
        'tipo',
        'nome'
    ]; 
}
