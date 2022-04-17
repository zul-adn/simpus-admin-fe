import React from 'react';
import {
    Header,
    Modal,
    Input,
    Button
} from './../../Components';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    getPetugas,
    createPetugas,
    deletePetugas,
    getPetugasById,
    updatePetugas
} from '../../AppCore/Actions';

const Index = () => {

    const states = useSelector(states => states.MainReducers);
    const dispatch = useDispatch();

    React.useEffect(() => {
        resetForm()
        dispatch(getPetugas({ faskesId: states.datas_user.faskesId }))
    }, [states.isUpdateData])

    React.useEffect(() => {
        if (states.datas_detail) {
            setName(states.datas_detail.name)
            setId(states.datas_detail.id)
            setProfesion(states.datas_detail.profesion)
            setEmail(states.datas_detail.email)
            setPassword(states.datas_detail.password)
        } else {
            console.log("TIdak ada isi")
        }
    }, [states.isDetail])

    const [officerId, setOfficerId] = React.useState('')
    const [showModal, setShowModal] = React.useState(false)
    const [isUpdate, setIsUpdate] = React.useState(false)
    const [name, setName] = React.useState('')
    const [id, setId] = React.useState('')
    const [profesion, setProfesion] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState()


    const setModalUpdate = () => {
        setIsUpdate(true)
        setShowModal(!showModal)
    }

    const setModalNew = () => {
        setIsUpdate(false)
        resetForm()
        setShowModal(!showModal)
    }

    const resetForm = () => {
        setName('')
        setId('')
        setProfesion('')
        setEmail('')
        setPassword('')
    }

    const onChangeInputName = (e) => {
        console.log(e)
        setName(e)
    }

    const onChangeInputId = (e) => {
        setId(e)
    }

    const onChangeInputProfesion = (e) => {
        setProfesion(e)
    }

    const onChangeInputEmail = (e) => {
        setEmail(e)
    }

    const onChangeInputPassoword = (e) => {
        setPassword(e)
    }

    const submitButton = () => {

        const body = {
            officerId,
            name,
            id,
            profesion,
            email,
            password
        }

        if (isUpdate) {
            dispatch(updatePetugas(body))
        } else {
            dispatch(createPetugas(body))
        }
    }

    const deleteItem = (id) => { 
        console.log(id)
        dispatch(deletePetugas(id))
    }

    const getById = (id) => {
        setOfficerId(id)
        dispatch(getPetugasById({ officerId: id }))
        setModalUpdate()
    }

    return (
        <div>
            <Header
                title={'Petugas Pelayanan'}
                onClick={setModalNew}
                disable={false}
                label={'Tambah Petugas'}
                isButton
            />
            <div className={`bg-white mt-5 rounded px-3 py-5 flex justify-center`}>
                {states.isLoadingAPICall ?
                    <div>Loading</div>
                    :
                    states.datas_petugas.length < 1 ?
                        <div>
                            <img src={require('./../../assets/nodata.png')} className={`w-40`} />
                            Data masih kosong
                        </div>
                        :
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">No</th>
                                    <th scope="col" className="px-6 py-3">Nama</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Profesi</th>
                                    <th scope="col" className="px-6 py-3">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {states.datas_petugas.map((v, i) =>
                                    <tr className="bg-white border-b rounded dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4">{v.name}</td>
                                        <td className="px-6 py-4">{v.email}</td>
                                        <td className="px-6 py-4">{v.profesion}</td>
                                        <td className="px-6 py-4">
                                            <Button
                                                type={`primary`}
                                                label={`edit`}
                                                extraClass={`mr-2`}
                                                onSubmit={() => getById(v.officerId)}
                                            />
                                            <Button
                                                type={`del`}
                                                label={`Hapus`}
                                                onSubmit={() => deleteItem(v.officerId)}
                                            />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                }
            </div>
            <Modal
                show={showModal}
                size={'xl'}
                onCancel={() => setShowModal(!showModal)}
                onSubmit={submitButton}
                saveButton
                isUpdate={isUpdate}
            >
                <form>
                    <Input
                        type={`text`}
                        label={`Nama Lengkap `}
                        placeholder={`Masukan nama lengkap`}
                        onChange={onChangeInputName}
                        value={name}
                    />
                    <Input
                        type={`text`}
                        label={`NIK`}
                        placeholder={`Masukan NIK`}
                        onChange={onChangeInputId}
                        value={id}
                        extraClass={`mt-5`}
                    />
                    <Input
                        type={`text`}
                        label={`Profesi`}
                        placeholder={`Masukan Profesi`}
                        onChange={onChangeInputProfesion}
                        value={profesion}
                        extraClass={`mt-5`}
                    />
                    <Input
                        type={`text`}
                        label={`Email`}
                        placeholder={`Masukan email`}
                        onChange={onChangeInputEmail}
                        value={email}
                        extraClass={`mt-5`}
                    />
                    <Input
                        type={`password`}
                        label={`Password`}
                        placeholder={`Masukan Password`}
                        onChange={onChangeInputPassoword}
                        value={password}
                        extraClass={`mt-5`}
                    />
                </form>
            </Modal>
        </div>
    )
}

export default Index;