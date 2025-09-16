<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRotaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rota', function (Blueprint $table) {
            $table->id('codRota');
            $table->boolean('compartilhada');
            $table->string('nome');
            $table->boolean('privada');
            $table->string('imagem');
            $table->string('distancia_total');
            $table->double('avalicao');
            $table->string('status');
            $table->integer('id_autor');
            $table->boolean('favoritada');
            $table->boolean('guiado');
            $table->double('valor');
            $table->string('comentario');
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
        Schema::dropIfExists('rota');
    }
}
