import React, {useState} from 'react';
import styles from './Input.module.css'

const Input = props => {

    const [link, setLink] = useState('');

    const onChangeHandler = (event) => {
        const link = event.target.value;
        
        setLink(link);
        props.sendLink(link);
    }

    return (
    <>
        <label htmlFor={props.input.id}>{props.label}</label>

        <input {...props.input} 
        value={link} 
        onChange={ event => {onChangeHandler(event)} } />
    </>
    )
};

export default Input;