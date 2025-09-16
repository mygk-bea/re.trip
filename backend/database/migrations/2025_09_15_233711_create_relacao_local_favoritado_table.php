<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoLocalFavoritadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_local_favoritado', function (Blueprint $table) {
            $table->id('codFavoritado');
            $table->unsignedBigInteger('fk_local_codLocal');
            $table->integer('id_usuario');

            $table->foreign('fk_local_codLocal')->references('codLocal')->on('local');
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
        Schema::dropIfExists('relacao_local_favoritado');
    }
}
