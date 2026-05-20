import Image from "next/image";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css["logo-box"]}>
      <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
      <p className={css["logo-text"]}>VocabBuilder</p>
    </div>
  );
};

export default Logo;
