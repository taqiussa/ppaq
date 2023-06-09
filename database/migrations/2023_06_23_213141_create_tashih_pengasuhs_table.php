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
        Schema::create('tashih_pengasuhs', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal');
            $table->string('tahun', 30);
            $table->string('bulan', 3);
            $table->foreignId('nis');
            $table->string('juz', 3);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tashih_pengasuhs');
    }
};
