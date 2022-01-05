import React, {useState} from 'react';
import styles from './Input.module.css'

const Input = props => {
    const [link, setLink] = useState('')


    return <input {...props.atributes}>
    
    </input>
}

export default Input;