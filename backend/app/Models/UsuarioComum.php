<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsuarioComum extends Model
{
    protected $table = "usuario_comum";

    protected $primaryKey = 'codUsuario';

    protected $fillable = [
        'codUsuario',
        'nome',
        'genero',
        'dataNascimento',
        'fk_credencial_codCredencial'
    ]; 
}
