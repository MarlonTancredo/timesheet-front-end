import { useContext } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { isLoggedContext } from "../../app/App";

const Router = () => {
    const { stateIsLogged } = useContext(isLoggedContext);

    if (!stateIsLogged) {
        return <PublicRoute />;
    }
    return <PrivateRoute />;
};

export default Router;
