
import "../../styles/navbar.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { TbNotification } from "react-icons/tb";
import Profile from "../../img/profileImg.jpg";


const Navbar = ({createPostToggle, setInputButtonsDisplay, setCreateInputType}) => {

  const createPostBtnHandle = () =>{
    createPostToggle();
    setInputButtonsDisplay(true);
    setCreateInputType('Na');
  }
  
  return (
    <div className="Navbar">
      <div className="navIcons">
        <BiHomeAlt className="homebtn btns"  />
        <BsChatSquareText  className="chatbtn btns" />
        <CgAddR className="createPostbtn btns" onClick={createPostBtnHandle}  />
        <TbNotification className="Notifybtn btns" />
        <img className="profile btns" src={Profile} alt="" />
      </div>

     

  
      
    </div>
  );
};

export default Navbar;

