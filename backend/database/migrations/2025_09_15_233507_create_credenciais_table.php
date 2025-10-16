<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCredenciaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credenciais', function (Blueprint $table) {
            $table->id("codCredencial");
            $table->string("tipo")->nullable(false);
            $table->string("email")->unique();
            // $table->string("token")->unique();
            $table->string("senha")->nullable(false);
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
        Schema::dropIfExists('credenciais');
    }
}
