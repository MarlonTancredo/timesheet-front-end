import { useContext } from "react";
import { isLoggedContext } from "../../app/App";
import * as F from "../styles/forms/styles";

import { Link } from "react-router-dom";

const HomePage = () => {
    const { stateIsLogged } = useContext(isLoggedContext);
    if (!stateIsLogged) {
        return (
            <F.HomeWrapper>
                <F.HomeStyledLink>
                    <Link to={"/sign-in"}>Enter you login!</Link>
                    {/* <Link to={"/sign-up"}>Still not registered?</Link> */}
                </F.HomeStyledLink>
            </F.HomeWrapper>
        );
    }
    return <h1> Welcome! </h1>;
};

export default HomePage;
