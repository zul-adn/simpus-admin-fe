import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
    GET_LOGIN,
    GET_LAYANAN,
    CREATE_LAYANAN,
    DELETE_DOKTER,
    DELETE_LAYANAN,
    GET_LAYANAN_BY_ID,
    UPDATE_LAYANAN,
    GET_PETUGAS,
    CREATE_PETUGAS,
    DELETE_PETUGAS,
    GET_PETUGAS_BY_ID,
    UPDATE_PETUGAS,
    GET_MACHINE,
    UPDATE_MACHINE,
    UPDATE_USER_DATAS
} from '../Actions/typeAction';

import {
    storeUserDatas,
    setLogin,
    storeLayanan,
    setLoadingAPICall,
    setUpdateData,
    storeDetail,
    setDetail,
    storePetugas,
    storeMachineSetting
} from '../Actions';

import * as API from './../Services/api';

function* workerLogin(action) {
    try {
        const loginResponse = yield call(API.loginFaskes, action.payload);
        if (loginResponse.response.status) {
            yield put(storeUserDatas(loginResponse.response.payload))
            yield put(setLogin())
        }else{
            console.log("salah")
        }
    } catch (error) {

    }
}

function* workerUpdateFaskes(action) {
    try {
        const updateResponse = yield call(API.updatefaskes, action.payload);
        if(updateResponse){
            yield put(setUpdateData())
        }
    } catch (error) {
        
    }
}

function* workerGetLayanan(action) {
    try {
        yield put(setLoadingAPICall())
        const getLayananResponse = yield call(API.getLayanan, action.payload);
        if(getLayananResponse){
            yield put(setLoadingAPICall())
            yield put(storeLayanan(getLayananResponse))
        }
    } catch (error) {
        
    }
}

function* workerCreateLayanan(action) {
    try {
        const createLayananResponse = yield call(API.createLayanan, action.payload);
        if(createLayananResponse){
            yield put(setUpdateData())
        }
    } catch (error) {
        
    }
}

function* workerLayananById(action) {
    try {
        const getLayananByIdResponse = yield call(API.getLayananById, action.payload);
        if(getLayananByIdResponse){
            yield put(storeDetail(getLayananByIdResponse))
            yield put(setDetail())
        }
    } catch (error) {
        
    }
}

function* workerUpdateLayanan(action) {
    try {
        console.log(action)
        const updateLayananResponse = yield call(API.updateLayanan, action.payload);
        if(updateLayananResponse){
            yield put(setUpdateData())
            console.log(updateLayananResponse)
        }
    } catch (error) {
        
    }
}

function* workerDeleteLayanan(action) {
    try {
        const deleteLayananResponse = yield call(API.deleteLayanan, action.payload);
        if(deleteLayananResponse){
            yield put(setUpdateData())
            console.log(deleteLayananResponse)
        }
    } catch (error) {
        
    }
} 

//========================

function* workerGetPetugas(action) {
    try {
        yield put(setLoadingAPICall())
        const getPetugasResponse = yield call(API.getPetugas, action.payload);
        if(getPetugasResponse){
            yield put(setLoadingAPICall())
            yield put(storePetugas(getPetugasResponse))
        }
    } catch (error) {
        
    }
}

function* workerCreatePetugas(action) {
    try {
        const createPetugasResponse = yield call(API.createPetugas, action.payload);
        if(createPetugasResponse){
            yield put(setUpdateData())
        }
    } catch (error) {
        
    }
}

function* workerPetugasById(action) {
    try {
        const getPetugasByIdResponse = yield call(API.getPetugasById, action.payload);
        if(getPetugasByIdResponse){
            yield put(storeDetail(getPetugasByIdResponse))
            yield put(setDetail())
        }
    } catch (error) {
        
    }
}

function* workerUpdatePetugas(action) {
    try {
        console.log(action)
        const updatePetugasResponse = yield call(API.updatePetugas, action.payload);
        if(updatePetugasResponse){
            yield put(setUpdateData())
        }
    } catch (error) {
        
    }
}

function* workerDeletePetugas(action) {
    try {
        const deletePetugasResponse = yield call(API.deletePetugas, action.payload);
        if(deletePetugasResponse){
            yield put(setUpdateData())
        }
    } catch (error) {
        
    }
}

function* workerGetMachine(action) {
    try {
        yield put(setLoadingAPICall())
        const getResponse = yield call(API.getMachine, action.payload);
        if(getResponse){
            yield put(setLoadingAPICall())
            yield put(storeMachineSetting(getResponse[0]))
        }
    } catch (error) {
        
    }
}

function* workerUpdateMachine(action) {
    try {
        const updateResponse = yield call(API.updateMachie, action.payload);
        if(updateResponse){
            yield put(setUpdateData())
        }
    } catch (error) {
        
    }
}

function* watcherAllWorker() {
    yield takeLatest(GET_LOGIN, workerLogin);
    yield takeLatest(UPDATE_USER_DATAS, workerUpdateFaskes);

    yield takeLatest(GET_LAYANAN, workerGetLayanan);
    yield takeLatest(CREATE_LAYANAN, workerCreateLayanan);
    yield takeLatest(DELETE_LAYANAN, workerDeleteLayanan);
    yield takeLatest(GET_LAYANAN_BY_ID, workerLayananById);
    yield takeLatest(UPDATE_LAYANAN, workerUpdateLayanan);
     
    yield takeLatest(GET_PETUGAS, workerGetPetugas);
    yield takeLatest(CREATE_PETUGAS, workerCreatePetugas);
    yield takeLatest(DELETE_PETUGAS, workerDeletePetugas);
    yield takeLatest(GET_PETUGAS_BY_ID, workerPetugasById);
    yield takeLatest(UPDATE_PETUGAS, workerUpdatePetugas);

    yield takeLatest(GET_MACHINE, workerGetMachine);
    yield takeLatest(UPDATE_MACHINE, workerUpdateMachine);
}

export default watcherAllWorker;