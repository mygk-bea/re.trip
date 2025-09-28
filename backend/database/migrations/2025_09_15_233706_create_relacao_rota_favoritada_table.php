<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoRotaFavoritadaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_rota_favoritada', function (Blueprint $table) {
            $table->id('codFavoritada');
            $table->unsignedBigInteger('fk_rota_codRota');
            $table->integer('id_usuario')->nullable(false);

            $table->foreign('fk_rota_codRota')->references('codRota')->on('rota');
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
        Schema::dropIfExists('relacao_rota_favoritada');
    }
}
