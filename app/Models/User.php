<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasRoles, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'nis',
        'password',
        'jenis_kelamin',
        'foto',
        'aktif'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the absensi associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function absensi(): HasOne
    {
        return $this->hasOne(Absensi::class, 'nis', 'nis')->withDefault();
    }

    /**
     * Get all of the absensis for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function absensis(): HasMany
    {
        return $this->hasMany(Absensi::class, 'nis', 'nis');
    }

    /**
     * Get the alamat associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function alamat(): HasOne
    {
        return $this->hasOne(Alamat::class, 'nis', 'nis')->withDefault();
    }

    /**
     * Get the alumni associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function alumni(): HasOne
    {
        return $this->hasOne(Alumni::class, 'nis', 'nis')->withDefault();
    }

    /**
     * Get all of the bilhifzhi for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function bilhifzhi(): HasMany
    {
        return $this->hasMany(Bilhifzhi::class, 'nis', 'nis');
    }

    /**
     * Get all of the binnadzor for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function binnadzor(): HasMany
    {
        return $this->hasMany(Binnadzor::class, 'nis', 'nis');
    }

    /**
     * Get the biodata associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function biodata(): HasOne
    {
        return $this->hasOne(Biodata::class, 'nis', 'nis')->withDefault();
    }

    /**
     * Get all of the halaqoh for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function halaqoh(): HasMany
    {
        return $this->hasMany(Halaqoh::class, 'nis', 'nis');
    }

    /**
     * Get the pembayaran associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function pembayaran(): HasOne
    {
        return $this->hasOne(Pembayaran::class, 'nis', 'nis')->withDefault();
    }

    /**
     * Get all of the pembayarans for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pembayarans(): HasMany
    {
        return $this->hasMany(Pembayaran::class, 'nis', 'nis');
    }

    /**
     * Get all of the tashih for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tashih(): HasMany
    {
        return $this->hasMany(TashihPengasuh::class, 'nis', 'nis');
    }

    /**
     * Get all of the tesSemeste for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tesSemester(): HasMany
    {
        return $this->hasMany(TesSemester::class, 'nis', 'nis');
    }
}
