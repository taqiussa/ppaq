import { toInteger } from "lodash";


export function arrayBulan() {
    const bulan = [
        { id: 1, nama: 'Muharram' },
        { id: 2, nama: 'Shafar' },
        { id: 3, nama: 'Rabiul Awwal' },
        { id: 4, nama: 'Rabiul Akhir' },
        { id: 5, nama: 'Jumadil Awwal' },
        { id: 6, nama: 'Jumadil Akhir' },
        { id: 7, nama: 'Rajab' },
        { id: 8, nama: "Sya'ban" },
        { id: 9, nama: 'Ramadhan' },
        { id: 10, nama: 'Syawwal' },
        { id: 11, nama: "Dzulqo'dah" },
        { id: 12, nama: 'Dzulhijjah' }
    ]
    return bulan
}

export function gunabayar(id) {
    switch (id) {
        case '1':
            return 'SPP Bulan Juli';
        case '2':
            return 'SPP Bulan Agustus';
        case '3':
            return 'SPP Bulan September';
        case '4':
            return 'SPP Bulan Oktober';
        case '5':
            return 'SPP Bulan November';
        case '6':
            return 'SPP Bulan Desember';
        case '7':
            return 'SPP Bulan Januari';
        case '8':
            return 'SPP Bulan Februari';
        case '9':
            return 'SPP Bulan Maret';
        case '10':
            return 'SPP Bulan April';
        case '11':
            return 'SPP Bulan Mei';
        case '12':
            return 'SPP Bulan Juni';
        default:
            return '';
    }
}

export function hariTanggal(tanggal) {
    return new Date(tanggal).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

export function maskRupiah(angka) {
    // Remove all non-numeric characters
    const numericValue = angka.replace(/\D/g, '')
    // Add a thousands separator
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    // Add the 'Rp.' prefix and return the formatted value
    return `Rp. ${formattedValue}`
}

export function namaBulan(bulan) {
    const bulanNumber = parseInt(bulan, 10) - 1; // subtract 1 since month index starts from 0
    return new Date(0, bulanNumber).toLocaleDateString('id-ID', { month: 'long' });
}


export function namaBulanHijriyah(bulan) {
    switch (bulan) {
        case '1':
            return 'Muharram';
        case '2':
            return 'Shafar';
        case '3':
            return 'Rabiul Awwal';
        case '4':
            return 'Rabiul Akhir';
        case '5':
            return 'Jumadil Awwal';
        case '6':
            return 'Jumadil Akhir';
        case '7':
            return 'Rajab';
        case '8':
            return "Sya'ban";
        case '9':
            return 'Ramadhan';
        case '10':
            return 'Syawwal';
        case '11':
            return "Dzulqo'dah";
        case '12':
            return 'Dzulhijjah';
        default:
            return '';
    }
}

export function namaHari(hari) {
    switch (hari) {
        case 1:
            return 'Senin';
        case 2:
            return 'Selasa';
        case 3:
            return 'Rabu';
        case 4:
            return 'Kamis';
        case 5:
            return 'Jumat';
        case 6:
            return 'Sabtu';
        default:
            return '';
    }
}

export function penjumlahan(list, column) {

    const totalJumlah = list.reduce((acc, curr) => {
        return acc + toInteger(curr[column])
    }, 0)

    return totalJumlah
}

export function rupiah(angka) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    return formatter.format(angka);
}

export function tanggal(tanggal) {
    return new Date(tanggal).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

