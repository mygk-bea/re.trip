<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TagsEvento extends Model
{
    protected $table = "relacao_tags_evento";

    protected $fillable = [
        'fk_tag_codTag',
        'fk_evento_codEvento'
    ]; 
}
