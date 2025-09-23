<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = "administrador";

    protected $primaryKey = 'codAdmin';

    protected $fillable = [
        'codAdmin',
        'nome',
        'cpf',
        'dataNascimento',
        'email',
        'senha'
    ]; 
}
