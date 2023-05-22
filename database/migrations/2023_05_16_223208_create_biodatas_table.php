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
        Schema::create('biodatas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nis');
            $table->string('nisn', 40)->nullable();
            $table->string('nik', 40)->nullable();
            $table->string('tempat_lahir', 100);
            $table->date('tanggal_lahir');
            $table->string('no_kk', 40)->nullable();
            $table->string('nama_ayah')->nullable();
            $table->string('nik_ayah', 40)->nullable();
            $table->string('nama_ibu')->nullable();
            $table->string('nik_ibu', 40)->nullable();
            $table->string('nama_wali')->nullable();
            $table->string('nik_wali', 40)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biodatas');
    }
};
