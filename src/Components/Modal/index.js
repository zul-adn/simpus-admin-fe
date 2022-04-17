import React from 'react'
import { Children } from 'react'

const Index = (props) => {

    const contentSize = props.size

    return (
        <div className={`absolute h-screen w-full top-0 right-0 z-10 bg-cyan-800/[0.8] ${props.show ? `flex` : `hidden`}`}>
            <div className={`w-full max-w-xl m-auto bg-white rounded-md shadow-default py-8 px-10 z-20`}>
                {props.children}
                <div className={`flex mt-10 justify-end`}>
                    <button
                        className={`px-5 py-2 mr-3 rounded bg-red-600 text-white text-sm`}
                        onClick={props.onCancel}
                    >
                        Batal
                    </button>
                    {props.saveButton ?
                        <button
                            className={`px-5 py-2 rounded bg-cyan-900 text-white text-sm`}
                            onClick={props.onSubmit}
                        >
                            {props.isUpdate ? "Update" : "Simpan"}
                        </button>
                        :
                        null
                    }
                </div>
            </div>

        </div>
    )
}

export default Index
