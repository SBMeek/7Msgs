import React, { createContext, useEffect, useState } from 'react'
import es from '../lang/es'
import en from '../lang/en' 

export const InitContext = createContext();

export default ({ children }) => {

    const [lang, setLang] = useState(null);

    useEffect(() => {
        let lng = navigator.language.substring(0, 2);
        switch(lng){
            case 'es':
                setLang(es);
                break;
            case 'en':
                setLang(en);
                break;
            default:
                setLang(en);
                break;
        }
    }, [])

    return (
        lang !== null
        &&
        <InitContext.Provider
            value={{
                lang
            }}
        >
            { children }
        </InitContext.Provider>
    )
}
