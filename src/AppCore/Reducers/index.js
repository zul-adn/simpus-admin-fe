import {
    GET_LOGIN,
    STORE_USER_DATAS,
    SET_LOGIN,
    STORE_LAYANAN,
    GET_LAYANAN,
    SET_LOADING_API_CALL,
    CREATE_LAYANAN,
    GET_LAYANAN_BY_ID,
    STORE_LAYANAN_DETAIL,
    SET_UPDATE_DATA,
    DELETE_LAYANAN,
    SET_DETAIL,
    STORE_DETAIL,
    UPDATE_LAYANAN,
    GET_PETUGAS,
    CREATE_PETUGAS,
    GET_PETUGAS_BY_ID,
    DELETE_PETUGAS,
    UPDATE_PETUGAS,
    STORE_PETUGAS,
    STORE_MACHINE_SETTING,
    GET_MACHINE,
    UPDATE_MACHINE,
    UPDATE_USER_DATAS
} from '../Actions/typeAction';


const INIT_STATE = {
    isLogin: false,
    isUpdateData: false,
    isDetail: false,
    isLoadingAPICall: false,
    datas_user: [],
    datas_layanan: [],
    detail_layanan: [],
    datas_petugas: [],
    datas_dokter: [],
    datas_mesin: [],
    datas_detail: null
}


export default (state, action) => {
    if (typeof state === 'undefined') {
        return INIT_STATE
    }
    switch (action.type) {

        case SET_LOADING_API_CALL:
            return {
                ...state,
                isLoadingAPICall: !state.isLoadingAPICall
            }
        case SET_UPDATE_DATA:
            return {
                ...state,
                isUpdateData: !state.isUpdateData
            }
        case GET_LOGIN:
            return {
                ...state
            }
        case SET_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            }
        case SET_DETAIL:
            return {
                ...state,
                isDetail: !state.isDetail,
            }
        case STORE_DETAIL:
            return {
                ...state,
                datas_detail: action.payload
            }
        case STORE_USER_DATAS:
            return {
                ...state,
                datas_user: action.payload
            }
        case UPDATE_USER_DATAS:
            return {
                ...state,
            }
        case GET_MACHINE:
            return {
                ...state
            }
        case STORE_MACHINE_SETTING:
            return {
                ...state,
                datas_mesin: action.payload
            }
        case UPDATE_MACHINE:
            return {
                ...state,
            }
        case GET_LAYANAN:
            return {
                ...state
            }
        case CREATE_LAYANAN:
            return {
                ...state
            }
        case UPDATE_LAYANAN:
            return {
                ...state
            }
        case STORE_LAYANAN:
            return {
                ...state,
                datas_layanan: action.payload
            }
        case GET_LAYANAN_BY_ID:
            return {
                ...state,
            }
        case DELETE_LAYANAN:
            return {
                ...state,
            }
        case STORE_PETUGAS:
            return {
                ...state,
                datas_petugas: action.payload
            }
        case GET_PETUGAS:
            return {
                ...state
            }
        case CREATE_PETUGAS:
            return {
                ...state
            }
        case UPDATE_PETUGAS:
            return {
                ...state
            }
        case GET_PETUGAS_BY_ID:
            return {
                ...state,
            }
        case DELETE_PETUGAS:
            return {
                ...state,
            }

    }
}