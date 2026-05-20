import AuthButtons from "../AuthButtons/AuthButtons";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css["header"]}>
      <div className="container">
        <div className={css["header-section"]}>
          <Logo />
          <Navigation />
          <AuthButtons />
        </div>
      </div>
    </div>
  );
};

export default Header;
