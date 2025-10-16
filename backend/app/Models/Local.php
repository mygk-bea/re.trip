<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Local extends Model
{
    protected $table = "local";

    protected $primaryKey = 'codLocal';

    protected $fillable = [
        'codLocal',
        'nome',
        'logradouro',
        'bairro',
        'numero',
        'cep',
        'telefone',
        'imagem',
        'cidade',
        'descricao',
        'disponibilidade',
        'avaliacao',
        'cnpj',
        'id_autor'
    ]; 
}
