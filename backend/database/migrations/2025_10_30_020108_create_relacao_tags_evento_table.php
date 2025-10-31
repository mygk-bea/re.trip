<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoTagsEventoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_tags_evento', function (Blueprint $table) {
            $table->unsignedBigInteger('fk_tag_codTag');
            $table->unsignedBigInteger('fk_evento_codEvento');
        
            $table->primary(['fk_tag_codTag', 'fk_evento_codEvento']);
        
            $table->foreign('fk_tag_codTag')->references('codTag')->on('tag');
            $table->foreign('fk_evento_codEvento')->references('codEvento')->on('evento');
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
        Schema::dropIfExists('relacao_tags_evento');
    }
}
