import React from 'react';
import Input from '../UI/Input';
import styles from './Form.module.css'

const Form = () => {

    const onLinkHandler = (link) => {
        console.log(link)
    }

    return (
        <>
         <form>
            <div className={styles['form-control']}>
                {/* <label>
                    Link do download
                </label> */}
                <Input  
                sendLink={onLinkHandler}
                label="Link do download"
                input={{
                    id: Math.random().toString(),
                    type: 'text'
                }} />
             </div>
         </form>
        </>
    );
}

export default Form;