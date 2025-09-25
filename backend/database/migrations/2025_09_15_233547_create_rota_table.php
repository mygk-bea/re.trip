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
            $table->boolean('compartilhada')->default(false);
            $table->string('nome');
            $table->boolean('privada');
            $table->string('imagem');
            $table->string('distancia_total');
            $table->double('avalicao')->default(0.0);
            $table->string('status')->default("Não iniciada");
            $table->integer('id_autor');
            $table->boolean('favoritada')->default(false);
            $table->boolean('guiado');
            $table->double('valor')->default(0.0);
            $table->string('comentario')->nullable();
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
