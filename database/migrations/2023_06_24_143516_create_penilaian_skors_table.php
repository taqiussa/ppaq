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
        Schema::create('penilaian_skors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('skor_id');
            $table->foreignId('nis');
            $table->date('tanggal');
            $table->string('bulan', 3);
            $table->string('tahun', 30);
            $table->integer('skor');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penilaian_skors');
    }
};
