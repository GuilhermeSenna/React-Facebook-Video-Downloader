import Input from '../UI/Input';
import styles from './Form.module.css'

const Form = () => {
    return (
        <>
         <form>
            <div className={styles['form-control']}>
                <label>
                    Link do download
                </label>
                <Input atributes ={{
                    type: "text"
                }}/>
             </div>
         </form>
        </>
    );
}

export default Form;