<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioComumTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario_comum', function (Blueprint $table) {
            $table->id('codUsuario');
            $table->string('nome')->nullable(false);
            $table->string('genero')->nullable(false);
            $table->date('dataNascimento')->nullable(false);
            $table->unsignedBigInteger('fk_credencial_codCredencial');
            $table->foreign('fk_credencial_codCredencial')->references('codCredencial')->on('credenciais');
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
        Schema::dropIfExists('usuario_comum');
    }
}
