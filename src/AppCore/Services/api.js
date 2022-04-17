import {
    del,
    get,
    post,
    put
} from './apiConfig';
import * as url from './urlList';

export const loginFaskes = (payload) => post(url.LOGIN, payload);
export const updatefaskes = (payload) => post(url.UPDATE_FASKES, payload);

export const getLayanan = (payload) => post(url.GET_LAYANAN, payload);
export const createLayanan = (payload) => post(url.CREATE_LAYANAN, payload);
export const deleteLayanan = (payload) => del(url.DELETE_LAYANAN, payload);
export const getLayananById = (payload) => post(url.GET_LAYANAN_BY_ID, payload);
export const updateLayanan = (payload) => post(url.UPDATE_LAYANAN, payload);

export const getPetugas = (payload) => post(url.GET_PETUGAS, payload);
export const createPetugas = (payload) => post(url.CREATE_PETUGAS, payload);
export const deletePetugas = (payload) => del(url.DELETE_PETUGAS, payload);
export const getPetugasById = (payload) => post(url.GET_PETUGAS_BY_ID, payload);
export const updatePetugas = (payload) => post(url.UPDATE_PETUGAS, payload);

export const getMachine = (payload) => post(url.GET_MACHINE_SETTING, payload);
export const updateMachie = (payload) => post(url.UPDATE_MACHINE, payload);
