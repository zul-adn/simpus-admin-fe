import React from 'react'

const Index = (props) => {

    const {
        label,
        onSubmit,
        extraStyle,
        type
    } = props;

    return (
        <button
            className={`px-5 py-2 rounded  text-white text-sm ${extraStyle} mr-2 ${ type === 'primary' ? `bg-cyan-900` : `bg-red-600`}  `}
            onClick={onSubmit}
        >
           {label}
        </button>
    )
}

export default Index
