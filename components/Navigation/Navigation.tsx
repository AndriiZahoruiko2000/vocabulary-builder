import Link from "next/link";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css["navigation"]}>
      <ul className={css["navigation-list"]}>
        <Link href={"/"} className={css["navigation-list-item"]}>
          Dictionary
        </Link>
        <Link href={"/"} className={css["navigation-list-item"]}>
          Recommend
        </Link>
        <Link href={"/"} className={css["navigation-list-item"]}>
          Training
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
