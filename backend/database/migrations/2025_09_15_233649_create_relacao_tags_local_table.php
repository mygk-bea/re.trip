<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelacaoTagsLocalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relacao_tags_local', function (Blueprint $table) {
            $table->unsignedBigInteger('fk_tag_codTag');
            $table->unsignedBigInteger('fk_local_codLocal');
        
            $table->primary(['fk_tag_codTag', 'fk_local_codLocal']);
        
            $table->foreign('fk_tag_codTag')->references('codTag')->on('tag');
            $table->foreign('fk_local_codLocal')->references('codLocal')->on('local');
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
        Schema::dropIfExists('relacao_tags_local');
    }
}
