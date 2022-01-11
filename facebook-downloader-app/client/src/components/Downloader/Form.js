import React, { useContext, useState, useEffect } from 'react';
import LinkContext from '../../store/link-context';
import Input from '../UI/Input';
import styles from './Form.module.css'

const Form = () => {
    const linkCtx = useContext(LinkContext)
    const [opacity, setOpacity] = useState(0)
    const [display, setDisplay] = useState('none')



    useEffect(() => {
        if (linkCtx.link.length > 0) {
            setDisplay('block');

            setTimeout(() =>
                setOpacity(1), 100
            )
        } else {
            setOpacity(0);

            setTimeout(() =>
                setDisplay('none'), 300
            )
        }

    }, [linkCtx.link])

    const onResetHandler = event => {
        event.preventDefault();

        linkCtx.onClearInput();
    }

    return (
        <>
            <form>
                <div className={styles['form-control-teste']}>
                    {/* <label>
                    Link do download
                </label> */}
                    <Input
                        className={styles.focus}
                        // label="Facebook Video URL"
                        input={{
                            id: Math.random().toString(),
                            type: "text",
                            placeholder: "https://www.facebook.com/___/videos/12345"
                        }} />

                    <button style={{
                        transition: 'opacity 0.3s ease',
                        opacity: opacity,
                        display: display
                    }} onClick={event => { onResetHandler(event) }}>Clear</button>
                </div>
            </form>
        </>
    );
}

export default Form;