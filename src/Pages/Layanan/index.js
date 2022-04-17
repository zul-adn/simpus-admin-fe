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
    getLayanan,
    createLayanan,
    deleteLayanan,
    getLayananById,
    updateLayanan
} from '../../AppCore/Actions';

const Index = () => {

    const states = useSelector(states => states.MainReducers);
    const dispatch = useDispatch();

    React.useEffect(() => {
        resetForm()
        dispatch(getLayanan({ faskesId: states.datas_user.faskesId }))
    }, [states.isUpdateData])

    React.useEffect(() => {
        if (states.datas_detail) {
            setName(states.datas_detail.name)
            setQueueId(states.datas_detail.queueId)
        } else {
            console.log("TIdak ada isi")
        }
    }, [states.isDetail])

    const [polyId, setPolyId] = React.useState('')
    const [showModal, setShowModal] = React.useState(false)
    const [name, setName] = React.useState('')
    const [queueId, setQueueId] = React.useState('')
    const [isUpdate, setIsUpdate] = React.useState(false)

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
        setQueueId('')
    }

    const onChangeInputName = (e) => {
        console.log(e)
        setName(e)
    }

    const onChangeKodeAntrian = (e) => {
        setQueueId(e)
    }

    const submitButton = () => {
        if (isUpdate) {
            dispatch(updateLayanan({polyId, name, queueId }))
        } else {
            dispatch(createLayanan({ name, queueId, faskesId: states.datas_user.faskesId }))
        }
    }

    const deleteItem = (id) => {
        dispatch(deleteLayanan(id))
    }

    const getLayananbyId = (id) => {
        setPolyId(id)
        dispatch(getLayananById({ polyId: id }))
        setModalUpdate()
    }

    return (
        <div>
            <Header
                title={'Pelayanan / Poliklinik'}
                onClick={setModalNew}
                disable={false}
                label={'Tambah Layanan'}
                isButton
            />
            <div className={`bg-white mt-5 rounded px-3 py-5 flex justify-center`}>
                {states.isLoadingAPICall ?
                    <div>Loading</div>
                    :
                    states.datas_layanan.length < 1 ?
                        <div>
                            <img src={require('./../../assets/nodata.png')} className={`w-40`} />
                            Data masih kosong
                        </div>
                        :
                        <table className="w-full rounded text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">No</th>
                                    <th scope="col" className="px-6 py-3">Nama</th>
                                    <th scope="col" className="px-6 py-3"> Kode Antri</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {states.datas_layanan.map((v, i) =>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4">{v.name}</td>
                                        <td className="px-6 py-4">{v.queueId}</td>
                                        <td className="px-6 py-4">
                                            <Button
                                                type={`primary`}
                                                label={`edit`}
                                                extraClass={`mr-2`}
                                                onSubmit={() => getLayananbyId(v.polyId)}
                                            />
                                            <Button
                                                type={`del`}
                                                label={`Hapus`}
                                                onSubmit={() => deleteItem(v.polyId)}
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
                        label={`Nama Layanan / Poliklinik `}
                        placeholder={`Masukan nama layanan / poliklinik`}
                        onChange={onChangeInputName}
                        value={name}
                    />
                    <Input
                        type={`text`}
                        label={`Kode Antrian`}
                        placeholder={`Masukan Kode Antrian Klinik`}
                        onChange={onChangeKodeAntrian}
                        value={queueId}
                        extraClass={`mt-5`}
                    />
                </form>
            </Modal>
        </div>
    )
}

export default Index;
