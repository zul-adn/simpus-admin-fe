import React from 'react';
import {
    Header
} from './../../Components'

export default function index() {
    return (
        <div>
           <Header 
                title = {'Dokter'}
                onClick = {() => console.log("KLIK")}
                disable={false}
                label = {'Tambah Dokter'}
                isButton
           />
        </div>
    )
}
