import React from 'react'

const Index = (props) => {
    return (
        <div className={`flex w-100 bg-white rounded px-5 py-3`}>
            <div className={`flex w-1/2 items-center`}>
                <p className="text-lg subpixel-antialiased font-semibold">{props.title}</p>
            </div>
            <div className={`flex w-1/2 justify-end`}>
                {props.isButton ?
                <button
                    className={` bg-cyan-900 font-semibold py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                    disable={props.disable}
                    onClick={props.onClick}
                >{props.label}</button>
                : null }
            </div>
        </div>
    )
}

export default Index;
