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
            $table->integer('id_autor')->nullable(false);
            $table->string('descricao')->nullable(false);
            $table->string('logradouro')->nullable(false);
            $table->string('bairro')->nullable(false);
            $table->string('numero')->nullable(false);
            $table->string('cidade')->nullable(false);
            $table->string('imagem')->nullable(false);
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
