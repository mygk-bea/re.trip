<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Credenciais extends Model
{
    protected $table = "credenciais";

    protected $primaryKey = 'codCredencial';

    protected $fillable = [
        'id_usuario',
        'tipo',
        'email',
        'senha'
    ]; 
}
