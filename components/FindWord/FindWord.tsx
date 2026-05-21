import css from "./FindWord.module.css";

const FindWord = () => {
  return (
    <div className={css["find-word"]}>
      <input
        type="text"
        name="word"
        className={css["find-word-input"]}
        placeholder="find a word"
      />
    </div>
  );
};

export default FindWord;
