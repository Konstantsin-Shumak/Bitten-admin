import facebookIcon from "../../Assets/Images/facebook-icon.svg";
import "./FacebookButton.css";

export const FacebookButton = () => {
    return (
        <button className="facebook_button_block">
            <img src={facebookIcon} alt="" className="facebook_button_block__icon" />
            <span className="facebook_button_block__text">Continue As Facebook</span>
        </button>
    );
}