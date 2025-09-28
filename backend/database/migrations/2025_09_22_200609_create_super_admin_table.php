<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuperAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('super_admin', function (Blueprint $table) {
            $table->id('codSuper');
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
        Schema::dropIfExists('super_admin');
    }
}
