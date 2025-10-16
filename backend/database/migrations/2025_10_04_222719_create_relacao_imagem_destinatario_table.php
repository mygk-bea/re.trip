<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoImagemDestinatarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_imagem_destinatario', function (Blueprint $table) {
            $table->unsignedBigInteger('fk_imagem_codImagem');
            $table->string('id_destinatario');

            $table->foreign('fk_imagem_codImagem')->references('codImagem')->on('imagens');

            $table->primary('fk_imagem_codImagem');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('relacao_imagem_destinatario');
    }
}
