<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoEventoLocaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_evento_locais', function (Blueprint $table) {
            $table->unsignedBigInteger('fk_local_codLocal');
            $table->unsignedBigInteger('fk_evento_codEvento');

            $table->foreign('fk_local_codLocal')->references('codLocal')->on('local');
            $table->foreign('fk_evento_codEvento')->references('codEvento')->on('evento');

            $table->primary(['fk_local_codLocal', 'fk_evento_codEvento']);

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
        Schema::dropIfExists('relacao_evento_locais');
    }
}
