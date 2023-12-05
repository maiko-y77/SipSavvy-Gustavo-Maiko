import styles from './ConfirmationDialog.module.scss'

interface ConfirmationDialogProps{
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, onCancel, onConfirm }) => {
  return (
    isOpen && (
        <div className={styles.confirmationDialog}>
            <div className={styles.content}>
                <p>Are you sure you want to delete this user?</p>
                <div className={styles.buttons}>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    )
  )
}

export default ConfirmationDialog