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
            $table->string('nome')->nullable(false);
            $table->boolean('privada')->nullable(false);
            $table->string('imagem')->nullable(false);
            $table->string('distancia_total')->nullable(false);
            $table->double('avalicao')->default(0.0);
            $table->string('status')->default("Não iniciada");
            $table->integer('id_autor')->nullable(false);
            $table->boolean('favoritada')->default(false);
            $table->boolean('guiado')->nullable(false);
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
