<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImagemDestinatario extends Model
{
    protected $table = "relacao_imagem_destinatario";

    protected $primaryKey = 'codImagemDestinario';

    protected $fillable = [
        'codImagemDestinario',
        'fk_imagem_codImagem',
        'id_destinatario',
        'tipo_destinatario'
    ]; 
}
