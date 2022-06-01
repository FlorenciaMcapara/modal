import styles from '../styles/modal.module.scss';

export default function ModalLoading(){
    return (
    <div className={styles.modalContainer}>
        <div className={styles.modalView}>Loading...</div>
        </div>
    );
}