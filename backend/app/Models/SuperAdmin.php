<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SuperAdmin extends Model
{
    protected $table = "super_admin";

    protected $primaryKey = 'codSuper';

    protected $fillable = [
        'codSuper',
        'nome',
        'cpf',
        'dataNascimento',
        'fk_credencial_codCredencial'
    ]; 
}
