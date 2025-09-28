<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PromotorTuristico extends Model
{
    protected $table = "promotor_turistico";

    protected $primaryKey = 'codPromotor';

    protected $fillable = [
        'codPromotor',
        'nome',
        'cpf',
        'dataNascimento',
        'fk_credencial_codCredencial'
    ]; 
}
