import React, { useEffect, useState } from 'react';
import Input from '../UI/Input';
import styles from './Form_teste.module.css'

const Form_teste = () => {
    return (
        <>
            <form>
                <div className={styles['form-control-teste']}>
                    {/* <label>
                    Link do download
                </label> */}
                    <Input
                        // label="Facebook Video URL"
                        input={{
                            id: Math.random().toString(),
                            type: "text",
                            placeholder: "https://www.facebook.com/___/videos/12345"
                        }} />
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
}

export default Form_teste;