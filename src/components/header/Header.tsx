import NavBarSignIn from "./NavBarSignIn";
import NavBarSignOut from "./NavBarSignOut";

type Props = {
    isLogged: boolean;
};

const Header = ({ isLogged }: Props) => {
    if (!isLogged) {
        return <NavBarSignIn />;
    }
    return <NavBarSignOut />;
};

export default Header;
