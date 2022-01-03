import styles from './Form.module.css'

const Form = () => {
    return (
        <>
         <form>
            <div className={styles['form-control']}>
                <label>
                    Link do download
                </label>
                <input type="text">
                </input>
             </div>
         </form>
        </>
    );
}

export default Form;