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
            $table->string('nome')->nullable(false);
            $table->boolean('privada')->nullable(false);
            $table->unsignedBigInteger('fk_credencial_autor')->nullable(false);
            $table->boolean('compartilhada')->default(false);
            $table->string('distancia_total')->default(0);
            $table->double('avalicao')->default(0.0);
            $table->string('status')->default("Não iniciada");
            $table->boolean('favoritada')->default(false);
            $table->boolean('guiado')->default(false);
            $table->double('valor')->default(0.0);
            $table->string('comentario')->nullable(true);

            $table->foreign('fk_credencial_autor')->references('codCredencial')->on('credenciais');

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
