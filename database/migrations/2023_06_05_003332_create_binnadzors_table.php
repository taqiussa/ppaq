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
        Schema::create('binnadzors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nis');
            $table->date('tanggal');
            $table->string('tahun', 30);
            $table->string('bulan', 3);
            $table->string('juz', 3);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('binnadzors');
    }
};
