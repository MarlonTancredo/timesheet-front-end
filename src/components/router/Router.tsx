import { useContext } from "react";
import SignedRouter from "./SignedRouter";
import SignedOutRouter from "./SignedOutRouter";
import { isLoggedContext } from "../../app/App";

const Router = () => {
    const { stateIsLogged } = useContext(isLoggedContext);

    if (!stateIsLogged) {
        return <SignedOutRouter />;
    }
    return <SignedRouter />;
};

export default Router;
