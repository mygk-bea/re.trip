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
            $table->string('nome')->nullable(false);
            $table->string('logradouro')->nullable(false);
            $table->string('bairro')->nullable(false);
            $table->string('numero')->nullable(false);
            $table->string('cep')->nullable(false);
            $table->string('telefone')->nullable(false);
            $table->string('imagem')->nullable(false);
            $table->string('cidade')->nullable(false);
            $table->string('descricao')->nullable(false);
            $table->string('disponibilidade')->nullable(false);
            $table->double('avaliacao')->default(0.0);
            $table->string('cnpj')->nullable(false);
            $table->integer('id_autor')->nullable(false);
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
