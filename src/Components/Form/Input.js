import React from 'react'

const Input = (props) => {

    const [isErr, setIsErr] = React.useState(false);
    const [errMsg, setErrMsg] = React.useState('');
    const [inputValue, setInputValue] = React.useState('')

    const {
        type,
        label,
        placeholder,
        onChange,
        validateType,
        accLength,
        value,
        extraClass
    } = props

    React.useEffect(() => {
        validateInput(value)
        setInputValue(value)
    }, [value])

    const validateEmail = (v) => {
        return v.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validateLength = (v) => {
        return v.length < accLength;
    };

    const validateInput = (str) => {
        if(validateType === 'email'){
            if(validateEmail(str)){
                setIsErr(false)
            } else{
                setIsErr(true)
                setErrMsg("Masukan email valid")
            }
        }else if(validateType === 'length'){
           
            if(validateLength(str)){
                setIsErr(false)
            } else{
                setIsErr(true)
                setErrMsg(`Isian minimal ${accLength} karakter`)
            }
        }else {
            return null
        }
    }

    const hanldeChange = (e) => {

        const str = onChange(e.target.value);

        // validateInput(str)
       
    }

    return (
        <div className={`${extraClass}`}>
            <label htmlFor={type} className={`text-xs font-medium`}>{label}</label>
            <input
                type={type}
                className={`w-full p-3 text-primary ${isErr ? 'border-2 border-red-500 outline-red-500' : 'border'} rounded text-sm transition duration-150 ease-in-out`}
                placeholder={placeholder}
                onChange={hanldeChange}
                value={value}
            />
            {isErr ?
                <span className="flex absolute items-center font-medium tracking-wide text-red-500 text-xs mt-1">
                    {errMsg}
                </span>
                :
                null
            }
        </div>
    )
}

export default Input
