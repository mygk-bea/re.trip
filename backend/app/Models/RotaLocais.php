<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RotaLocais extends Model
{
    protected $table = "relacao_rota_locais";

    protected $fillable = [
        'fk_rota_codRota',
        'fk_local_codLocal'
    ]; 
}
