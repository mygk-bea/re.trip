<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TagsLocal extends Model
{
    protected $table = "relacao_tags_local";

    protected $fillable = [
        'fk_tag_codTag',
        'fk_local_codLocal'
    ]; 
}
