<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoRotaLocaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_rota_locais', function (Blueprint $table) {
            $table->unsignedBigInteger('fk_rota_codRota');
            $table->unsignedBigInteger('fk_local_codLocal');

            $table->primary(['fk_rota_codRota', 'fk_local_codLocal']);

            $table->foreign('fk_rota_codRota')->references('codRota')->on('rota');
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
        Schema::dropIfExists('relacao_rota_locais');
    }
}
