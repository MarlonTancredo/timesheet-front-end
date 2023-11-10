import { useContext } from "react";
import NavBarSignIn from "./NavBarSignIn";
import NavBarSignOut from "./NavBarSignOut";
import { isLoggedContext } from "../../app/App";

const Header = () => {
    const { stateIsLogged } = useContext(isLoggedContext);

    if (!stateIsLogged) {
        return <NavBarSignIn />;
    }
    return <NavBarSignOut />;
};

export default Header;
