<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PenilaianSkor extends Model
{
    use HasFactory;
    protected $guarded = [];

    /**
     * Get the skor that owns the PenilaianSkor
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function skors(): BelongsTo
    {
        return $this->belongsTo(Skor::class)->withDefault();
    }

    /**
     * Get the user that owns the PenilaianSkor
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'nis', 'nis')->withDefault();
    }
}
