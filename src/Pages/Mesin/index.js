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
    getMesin,
    updateMachine
} from '../../AppCore/Actions';
import ReactPlayer from 'react-player/youtube';


const Index = () => {

    const states = useSelector(states => states.MainReducers);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getMesin({ faskesId: states.datas_user.faskesId }))
    }, [states.isUpdateData])

    const [machineId, setMachineId] = React.useState(states.datas_mesin.machineId)
    const [youtubeOnMachine, setYoutubeOnMachine] = React.useState(states.datas_mesin.youtubeOnMachine);
    const [youtubeOnTv, setYoutubeOnTV] = React.useState(states.datas_mesin.youtubeOnTv);
    const [runningText, setRunningText] = React.useState(states.datas_mesin.runningText);
    const [pin, setPin] = React.useState(states.datas_mesin.pin);

    const onChangeInputYoutubeKiosk = (e) => {
       setYoutubeOnMachine(e)
    }

    const onChangeInputYoutubeTV = (e) => {
        setYoutubeOnTV(e)
    }

    const onChangeInputRunningText = (e) => {
        setRunningText(e)
    }

    const onChangeInputPIN = (e) => {
        setPin(e)
    }

    const updateData = (e) => {
        const body = {
            machineId,
            pin,
            youtubeOnMachine,
            youtubeOnTv,
            runningText
        }

        dispatch(updateMachine(body))
    }

    return (
        <div>
            <Header
                title={'Setting Mesin Antrian'}
                disable={false}
                label={'Update Mesin'}
                isButton
                onClick={updateData}
            />
            <div className={`flex w-100 bg-white rounded px-5 py-3 mt-5`}>
                    <Input
                        type={`text`}
                        label={`PIN Kiosk antrian`}
                        placeholder={`Masukan PIN`}
                        extraClass={`w-full`}
                        onChange={onChangeInputPIN}
                        value={pin}
                    />
            </div>
            <div className={`w-full flex flex-row space-between mt-5 `}>
        
                <div className={`flex w-1/2  px-5 py-3 bg-white`}>
                    <ReactPlayer url={youtubeOnMachine} style={{ width: '100%' }} />
                </div>
                <div className={`flex flex w-1/2  px-5 py-3 bg-white`}>
                    <ReactPlayer url={youtubeOnTv} style={{ width: '100%' }} />
                </div>
            </div>

            <div className={`flex w-100 bg-white rounded px-5 py-3 mt-5`}>
                    <Input
                        type={`text`}
                        label={`Vidio Kiosk`}
                        placeholder={`Masukan URL Youtube`}
                        extraClass={`w-full`}
                        onChange={onChangeInputYoutubeKiosk}
                        value={youtubeOnMachine}
                    />
            </div>
            <div className={`flex w-100 bg-white rounded px-5 py-3 mt-5`}>
                    <Input
                        type={`text`}
                        label={`Vidio TV`}
                        placeholder={`Masukan URL Youtube`}
                        extraClass={`w-full`}
                        onChange={onChangeInputYoutubeTV}
                        value={youtubeOnTv}
                    />
            </div>
            <div className={`flex w-100 bg-white rounded px-5 py-3 mt-5`}>
                    <Input
                        type={`text`}
                        label={`Running Text`}
                        placeholder={`Running Text`}
                        extraClass={`w-full`}
                        onChange={onChangeInputRunningText}
                        value={runningText}
                    />
            </div>
        </div>
    )
}

export default Index
