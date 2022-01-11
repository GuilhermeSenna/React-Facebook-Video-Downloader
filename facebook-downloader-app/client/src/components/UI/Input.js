import React, { useState, useContext } from 'react';
import LinkContext from '../../store/link-context';
import styles from './Input.module.css'

const Input = props => {


    const linkCtx = useContext(LinkContext)

    // const [link, setLink] = useState('');

    const onChangeHandler = (link) => {
        // setLink(link)
        linkCtx.onStartTyping(link);
    }

    // const onResetHandler = () => {
    //     // setLink('');
    // }

    return (
        <>
            <label htmlFor={props.input.id}>{props.label}</label>

            <input {...props.input}
                value={linkCtx.link}
                onChange={event => { onChangeHandler(event.target.value) }} />
            {/* <button>Go</button> */}
        </>
    )
};

export default Input;