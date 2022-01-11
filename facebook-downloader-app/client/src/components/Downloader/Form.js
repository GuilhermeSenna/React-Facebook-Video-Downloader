import React, { useContext } from 'react';
import LinkContext from '../../store/link-context';
import Input from '../UI/Input';
import styles from './Form.module.css'

const Form = () => {
    const linkCtx = useContext(LinkContext)

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
                    {linkCtx.link.length ? <button onClick={event => { onResetHandler(event) }}>Clear</button> : ''}
                </div>
            </form>
        </>
    );
}

export default Form;