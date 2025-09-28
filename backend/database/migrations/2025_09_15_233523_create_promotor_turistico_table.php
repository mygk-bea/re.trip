<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePromotorTuristicoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promotor_turistico', function (Blueprint $table) {
            $table->id('codPromotor');
            $table->string('nome')->nullable(false);
            $table->string('cpf')->nullable(false);
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
        Schema::dropIfExists('promotor_turistico');
    }
}
