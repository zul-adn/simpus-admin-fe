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
    updateUserDatas
} from '../../AppCore/Actions'

const Index = () => {
    const states = useSelector(states => states.MainReducers);
    const dispatch = useDispatch();

    const [faskesId, setFaskesId] = React.useState(states.datas_user.faskesId)
    const [name, setName] = React.useState(states.datas_user.name);
    const [address, setAddress] = React.useState(states.datas_user.address);
    const [queueServer, setQueueServer] = React.useState(states.datas_user.queueServer);


    const handleNameChange = (e) => {
        setName(e)
    }

    const handleAddressChange = (e) => {
        setAddress(e)   
    }

    const handleQueueServerChange = (e) => {
        setQueueServer(e)
    }   

    const updateFaskes = () => {
        const body = {
            faskesId,
            name,
            address,
            queueServer
        }
        dispatch(updateUserDatas(body))
    }

    return (
        <div>
            <Header
                title={'Update Profil Faskes'}
                disable={false}
                label={'Update Profil'}
                isButton
                onClick={updateFaskes}
            />

            <div className={`bg-white mt-5 rounded px-5 py-5`}>
            <form>
                    <Input
                        type={`text`}
                        label={`Nama Fasilitas Kesehatan`}
                        placeholder={`Nama Fasilitas Kesehatan`}
                        onChange={handleNameChange}
                        value={name}
                        extraClass={`w-full`}
                    />
                    <Input
                        type={`text`}
                        label={`Alamat`}
                        placeholder={`Alamat`}
                        onChange={handleAddressChange}
                        value={address}
                        extraClass={`mt-5`}
                    />
                    <Input
                        type={`text`}
                        label={`Server Antrian`}
                        placeholder={`Server Antrian`}
                        onChange={handleQueueServerChange}
                        value={queueServer}
                        extraClass={`mt-5`}
                    />
                </form>
            </div>
        </div>
    )
}

export default Index;
