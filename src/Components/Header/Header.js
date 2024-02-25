import "./Header.css";
import { NavLink } from "react-router-dom";
import { FormattedMessage} from "react-intl";

const Header = ({ changeMessages }) => {
  return (
    <div className="container">
      <h1 className="container__title"><FormattedMessage id='header.logo' /></h1>
      <nav className="navigation">
        <NavLink to="/"><FormattedMessage id='header.home' /></NavLink>
        <NavLink to="/users"><FormattedMessage id='header.users' /></NavLink>
        <NavLink to="/create-user"><FormattedMessage id='header.createUser' /></NavLink>
      </nav>
      <div>
        <button onClick={() => changeMessages('Spanish')} className="navigator__leng">ES</button>
        <button onClick={() => changeMessages('English')} className="navigator__leng">EN</button>
      </div>
    </div>
  );
};

export default Header;
