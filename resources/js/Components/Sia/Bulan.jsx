import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Bulan(
    { name, id, value, message, className, required, isFocused, handleChange },
    ref
) {

    const input = ref ? ref : useRef();

    useEffect(() => {

        if (isFocused) {

            input.current.focus();

        }

    }, []);

    return (
        <div className='flex flex-col text-slate-600 capitalize'>
            <div>
                bulan
            </div>
            <div>
                <select
                    name={name}
                    id={id}
                    value={value}
                    className={
                        `border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-md shadow-sm w-full ` +
                        className
                    }
                    ref={input}
                    required={required}
                    onChange={(e) => handleChange(e)}
                >

                    <option value="">Pilih Bulan</option>
                    <option value="01">Muharram</option>
                    <option value="02">Shafar</option>
                    <option value="03">Rabiul Awwal</option>
                    <option value="04">Rabiul Akhir</option>
                    <option value="05">Jumadil Awwal</option>
                    <option value="06">Jumadil Akhir</option>
                    <option value="07">Rajab</option>
                    <option value="08">Sya'ban</option>
                    <option value="09">Ramadhan</option>
                    <option value="10">Syawwal</option>
                    <option value="11">Dzulqo'dah</option>
                    <option value="12">Dzulhijjah</option>


                </select>
            </div>
            {message ?
                <div className='text-sm text-red-600'>
                    {message}
                </div>
                :
                null
            }
        </div>
    )
});
