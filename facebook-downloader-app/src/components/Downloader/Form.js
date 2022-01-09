import React, { useEffect, useState } from 'react';
import Input from '../UI/Input';
import styles from './Form.module.css'

const Form = () => {
    return (
        <>
            <form>
                <div className={styles['form-control']}>
                    {/* <label>
                    Link do download
                </label> */}
                    <Input
                        label="Facebook Video URL"
                        input={{
                            id: Math.random().toString(),
                            type: "text",
                            placeholder: "https://www.facebook.com/___/videos/12345"
                        }} />
                </div>
            </form>
        </>
    );
}

export default Form;