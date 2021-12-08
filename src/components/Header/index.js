import './Header.css';
import headerInfoLogo from '../../resources/svgs/logo-horizontal.svg';
import userInfoLogo from '../../resources/svgs/user-icon.svg';


// TS validation can be added over here

function Header(props) {
  const {userDetails} = props;   
  return (
    <div className="Header">
       <div className="Header-info">
          <img src={headerInfoLogo} className="Header-info-logo" alt="logo" />
       </div>
       <div className="User-info">
           <img src={userInfoLogo} className="User-info-logo" alt="logo" />
           {userDetails.name}
       </div>
    </div>
  );
}

export default Header;
