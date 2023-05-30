<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WajibBayar extends Model
{
    use HasFactory;
    protected $guarded = [];

    /**
     * Get the kategori that owns the WajibBayar
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function kategoriPembayaran(): BelongsTo
    {
        return $this->belongsTo(KategoriPembayaran::class)->withDefault();
    }
}
