import {
    SET_UPDATE_DATA,
    SET_LOADING_API_CALL,
    SET_DETAIL,
    GET_LOGIN, 
    STORE_USER_DATAS, 
    UPDATE_USER_DATAS,
    SET_LOGIN,
    GET_LAYANAN,
    STORE_LAYANAN,
    CREATE_LAYANAN,
    UPDATE_LAYANAN,
    DELETE_LAYANAN,
    GET_LAYANAN_BY_ID,
    STORE_DETAIL,
    GET_PETUGAS,
    STORE_PETUGAS,
    CREATE_PETUGAS,
    UPDATE_PETUGAS,
    DELETE_PETUGAS,
    GET_PETUGAS_BY_ID,
    STORE_MACHINE_SETTING,
    GET_MACHINE,
    UPDATE_MACHINE,
} from './typeAction';


export const login = (payload) => {
    return {
        type : GET_LOGIN,
        payload: payload
    }
}

export const setLogin = () => {
    return {
        type : SET_LOGIN
    }
} 

export const storeUserDatas = (payload) => {
    return {
        type : STORE_USER_DATAS,
        payload
    }
}

export const updateUserDatas = (payload) => {
    return {
        type : UPDATE_USER_DATAS,
        payload
    }
}

export const storeMachineSetting = (payload) => {
    return {
        type : STORE_MACHINE_SETTING,
        payload
    }
}


//========= LAYANAN ======
export const getLayanan = (payload) => {
    return {
        type : GET_LAYANAN,
        payload
    }
}
export const storeLayanan = (payload) => {
    return {
        type : STORE_LAYANAN,
        payload
    }
}
export const createLayanan = (payload) => {
    return {
        type : CREATE_LAYANAN,
        payload
    }
}
export const getLayananById = (payload) => {
    return {
        type : GET_LAYANAN_BY_ID,
        payload
    }
}
export const updateLayanan = (payload) => {
    return {
        type : UPDATE_LAYANAN,
        payload
    }
}

export const deleteLayanan = (payload) => {
    return {
        type : DELETE_LAYANAN,
        payload
    }
}

//====== PETUGAS
export const getPetugas = (payload) => {
    return {
        type : GET_PETUGAS,
        payload
    }
}
export const storePetugas = (payload) => {
    return {
        type : STORE_PETUGAS,
        payload
    }
}
export const createPetugas = (payload) => {
    return {
        type : CREATE_PETUGAS,
        payload
    }
}
export const getPetugasById = (payload) => {
    return {
        type : GET_PETUGAS_BY_ID,
        payload
    }
}
export const updatePetugas = (payload) => {
    return {
        type : UPDATE_PETUGAS,
        payload
    }
}

export const deletePetugas = (payload) => {
    return {
        type : DELETE_PETUGAS,
        payload
    }
}

//====== MACHINE
export const getMesin = (payload) => {
    return {
        type : GET_MACHINE,
        payload
    }
}
export const storeMesin = (payload) => {
    return {
        type : STORE_MACHINE_SETTING,
        payload
    }
}
export const updateMachine = (payload) => {
    return {
        type : UPDATE_MACHINE,
        payload
    }
}

//LODING
export const setLoadingAPICall = () => {
    return {
        type : SET_LOADING_API_CALL
    }
}

export const setUpdateData = () => {
    return {
        type : SET_UPDATE_DATA
    }
}

export const setDetail = () => {
    return {
        type : SET_DETAIL
    }
}

//STORE DETAIL
export const storeDetail = (payload) => {
    return {
        type: STORE_DETAIL,
        payload
    }
}