<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocaisEvento extends Model
{
    protected $table = "relacao_evento_locais";

    protected $primaryKey = "pk_evento_local";

    protected $fillable = [
        'fk_local_codLocal',
        'fk_evento_codEvento'
    ]; 
}
