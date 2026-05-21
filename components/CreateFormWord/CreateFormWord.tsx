import { categories } from "@/helpers/constants";
import CustomSelector from "../custom-components/CustomSelector/CustomSelector";
import css from "./CreateFormWord.module.css";
import { useId } from "react";
import { createWord } from "@/services/words";

interface CreateFormWordProps {
  closeModal: () => void;
}

const CreateFormWord = ({ closeModal }: CreateFormWordProps) => {
  const id = useId();

  const handleSubmit = async (formData: FormData) => {
    const wordData = {
      en: formData.get("english") as string,
      ua: formData.get("ukrainian") as string,
      category: formData.get("category") as string,
      isIrregular: (formData.get("type") as string) === "irregular",
    };

    const response = await createWord(wordData);
  };

  return (
    <div className={css["create-form-word"]}>
      <h4 className={css["create-form-word-title"]}>Add word</h4>
      <p className={css["create-form-word-text"]}>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <form action={handleSubmit} className={css["create-form"]}>
        <CustomSelector
          categories={categories}
          name={"category"}
          isDarkMode={true}
        />
        <div className={css["radio-box"]}>
          <label htmlFor={`regular${id}`} className={css["radio-box-text"]}>
            Regular
          </label>
          <input
            value={"regular"}
            type="radio"
            name="type"
            id={`regular${id}`}
            defaultChecked
            className={css["radio-input"]}
          />
          <label htmlFor={`irregular${id}`} className={css["radio-box-text"]}>
            Irregular
          </label>
          <input
            value={"irregular"}
            type="radio"
            name="type"
            id={`irregular${id}`}
            className={css["radio-input"]}
          />
        </div>
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

export default CreateFormWord;
