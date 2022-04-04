import { React, useEffect } from 'react'

const CustomInput = ({state, setState, placeholder, type, equalTo}) => {
    const setInput = (string) => {
        const validationKeys = Object.keys(state.rules);
        let validation = {};

        if(state.validation.messages.server) {
            validation = removeValidationState('server');
        }
        validationKeys.forEach(key => {
            switch(key){
                case 'empty':
                    validation = (string.length === 0) ? setValidationState(key) : removeValidationState(key);
                    break;
                case 'min':
                    validation = (string.length < (state.rules[key]?.length || 3) 
                    && string.length !== 0) ? 
                        setValidationState(key) : removeValidationState(key);
                    break;
                case 'max':
                    validation = (string.length > (state.rules[key]?.length || 10)) ? setValidationState(key) : removeValidationState(key);
                    break;
                case 'equal':
                    if(string !== equalTo.get.value) {
                        validation = setValidationState(key);
                        let otherInputState = {
                            ...equalTo.get 
                        }
                        otherInputState.validation.messages.equal = validation.messages.equal;
                        equalTo.set(otherInputState);
                    }else{
                        validation = removeValidationState(key);
                        let otherInputState = {
                            ...equalTo.get 
                        }
                        otherInputState.validation.messages.equal = validation.messages.equal;
                        equalTo.set({
                            ...equalTo.get, 
                            validation, 
                        });
                    }
            }
            
        });
        let newState = {
            ...state,
            value: string, 
            validation, 
        }
        setState(newState)
    }

    const setValidationState = (key) => {
        let validation = {
            messages: state.validation.messages,
            valid: false,
        }
        validation.messages[key] = state.rules[key].message || "Placeholder message! Something went wrong!";
        validation.valid = (Object.keys(validation.messages).length === 0) ? true : false;

        return validation;
    }

    const removeValidationState = (key) => {
        let validation = {
            messages: state.validation.messages,
            valid: false,
        }
        delete validation.messages[key];
        validation.valid = (Object.keys(validation.messages).length === 0) ? true : false;

        return validation;
    }

    const show = () => {
        if(state.value.length === 0 && state.rules.validateOnEmpty === false) {
            return false;
        }else return true;
    }
    

    const errorMessages = (
        Object.keys(state?.validation?.messages).map((key, index) => {
            return <div key={key}>{state?.validation?.messages[key]}</div>
        })
    );

    
    return (
    <>
        <input 
            type={type}
            placeholder={placeholder}
            onKeyUp={ (e) => setInput(e.target.value) }
            className={`
                ${(state?.validation?.valid === false && show()) ? 'invalid' : ''}
                ${(state?.validation?.valid === true && show()) ? 'valid' : ''}
            `}
        />
        <small className={`text-danger ${(state?.validation?.valid === false) ? '' : 'hidden'}`}>
            {
                errorMessages
            }
        </small>
    </> 
    )
}

export default CustomInput