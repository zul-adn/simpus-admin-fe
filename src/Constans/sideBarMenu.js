
import {
    Dashboard,
    Layanan,
    Petugas,
    Dokter,
    Mesin,
    Profil
} from './../Pages';

const sideBarMenu = [
    {
        'id' : 1,
        'label' : 'Dashboard',
        'url' : '/dashboard',
        'icon' : 'bxs-dashboard',
        'page' : Dashboard
    },
    {
        'id' : 2,
        'label' : 'Layanan',
        'url' : '/layanan',
        'icon' : 'bxs-home-heart',
        'page' : Layanan
    },
    {
        'id' : 3,
        'label' : 'Petugas',
        'url' : '/petugas',
        'icon' : 'bxs-user-plus',
        'page' : Petugas
    },
    {
        'id' : 4,
        'label' : 'Mesin Antrian',
        'url' : '/mesinantrian',
        'icon' : 'bxs-user-plus',
        'page' : Mesin
    },
    {
        'id' : 5,
        'label' : 'Profil',
        'url' : '/profil',
        'icon' : 'bxs-user-plus',
        'page' : Profil
    },
]

export {
    sideBarMenu
}