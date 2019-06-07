import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { FormContext } from '../App.jsx';

const useForm = (name, options, callback) => {
    const { enableDirty, validateFunc, initValue } = options;
    const [ dirty, setDirty ] = useState(false);
    const [ value, setValue ] = useState(initValue || "");
    const [ metaData, setMetaData ] = useState({dirty, name, isValid: true})
    const touched = useRef()
    const setTouched = (e) => touched.current = e.target
    const setValueCallback = useCallback(setValue, [value]);
    // export this setValue to save the value; setValue(e.target.value)

    useEffect(() => {
        const isValid = validateFunc(value);
        if (enableDirty && touched.current) {
            setDirty(true);
            // setMetaData({...metaData, true})
        }
        if (!enableDirty) {
            delete metaData.dirty;
        }

        const newMetaData = { ...metaData, dirty, isValid }
        setMetaData(newMetaData)
        if (typeof callback === 'function'){
            callback(name, {value, metaData: newMetaData})
        }
    }, [value, dirty, name, enableDirty, setDirty])
    return [value, metaData, setValueCallback, setTouched]
}


const FormExample = (props) => {
    const { changeForm } = useContext(FormContext);

    const [ name, nameMetaData, setName, nameTouched ] = useForm('name', {
        enableDirty: true,
        initValue: "",
        validateFunc: (value) => value.length > 0 && value.length < 20
    }, changeForm);

    const [ age, ageMetaData, setAge, ageTouched ] = useForm('age', {
        enableDirty: true,
        initValue: 0,
        validateFunc: (value) => value.length > 0 && value.length < 20
    });
    return (
        <>
            <form>
                <label>Name</label>
                <input htmlFor="Name" onFocus={nameTouched} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
            <pre>{JSON.stringify([ name, nameMetaData ] , null, 4)}</pre>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </>
    )
}

export default FormExample;
