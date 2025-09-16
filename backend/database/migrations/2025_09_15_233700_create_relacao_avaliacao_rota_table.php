<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoAvaliacaoRotaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_avaliacao_rota', function (Blueprint $table) {
            $table->id('codAvaliacao');
            $table->unsignedBigInteger('fk_rota_codRota');
            $table->integer('id_usuario');
            $table->double('nota');

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
        Schema::dropIfExists('relacao_avaliacao_rota');
    }
}
