<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('local', function (Blueprint $table) {
            $table->id('codLocal');
            $table->string('nome');
            $table->string('endereco');
            $table->string('telefone');
            $table->string('imagem');
            $table->string('cidade');
            $table->string('descricao');
            $table->string('disponibilidade');
            $table->double('avaliacao');
            $table->string('cnpj');
            $table->integer('id_autor');
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
        Schema::dropIfExists('local');
    }
}
