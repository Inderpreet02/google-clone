import "./Header.css"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className="header">
            <div className="header__content">
                <p>Gmail</p>
                <p>Images</p>
                <span>
                    <AppsIcon/>
                </span>
                <span>
                    <Avatar src="https://media.altchar.com/prod/images/940_530/gm-db676e64-95ff-47e7-9e0b-3799e75f86f1-gaben.jpeg"/>
                </span>
            </div>       
        </div>
    )
}

export default Header
