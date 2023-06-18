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
        Schema::create('tes_semesters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nis');
            $table->foreignId('user_id');
            $table->date('tanggal');
            $table->string('tahun', 30);
            $table->string('bulan', 3);
            $table->string('semester', 3);
            $table->string('juz', 10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tes_semesters');
    }
};
