<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HostTuristico extends Model
{
    protected $table = "host_turistico";

    protected $primaryKey = 'codHost';

    protected $fillable = [
        'codHost',
        'nome',
        'cpf',
        'dataNascimento',
        'email',
        'senha'
    ]; 
}
