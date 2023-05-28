<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('alamats', function (Blueprint $table) {
            $table->string('rt', 5)->nullable();
            $table->string('rw', 5)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('alamats', function (Blueprint $table) {
            //
        });
    }
};
