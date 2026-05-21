import css from "./EditForm.module.css";

interface EditFormProps {
  closeModal: () => void;
}

const EditForm = ({ closeModal }: EditFormProps) => {
  return (
    <div className={css["edit-form"]}>
      <form action="">
        <div className={css["input-box"]}>
          <div className={css["input-wrapper"]}>
            <input
              type="text"
              name="ukrainian"
              className={css["input-box-item"]}
              placeholder="слово"
            />
            <p className={css["input-box-text"]}>Ukrainian</p>
          </div>
          <div className={css["input-wrapper"]}>
            <input
              type="text"
              name="english"
              className={css["input-box-item"]}
              placeholder="word"
            />
            <p className={css["input-box-text"]}>English</p>
          </div>
        </div>
        <div className={css["form-buttons-list"]}>
          <button className={css["form-button-add"]} type="submit">
            Add
          </button>
          <button className={css["form-button-cancel"]} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
