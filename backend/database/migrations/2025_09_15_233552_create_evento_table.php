<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evento', function (Blueprint $table) {
            $table->id('codEvento');
            $table->date('data')->nullable(false);
            $table->time('hora')->nullable(false);
            $table->string('descricao')->nullable(false);
            $table->string('nome')->nullable(false);
            // $table->string('logradouro')->nullable(true);
            // $table->string('bairro')->nullable(true);
            // $table->string('numero')->nullable(true);
            // $table->string('cidade')->nullable(true);
            $table->unsignedBigInteger('fk_credencial_autor')->nullable(false);

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
        Schema::dropIfExists('evento');
    }
}
