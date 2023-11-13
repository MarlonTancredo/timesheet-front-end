import { NavLink } from "react-router-dom";
import * as S from "../../app/styles";
import * as F from "../styles/forms/styles";
import { useContext } from "react";
import { isLoggedContext } from "../../app/App";

const NavBarSignOut = () => {
    const { setStateIsLogged } = useContext(isLoggedContext);

    const setUserInSessionStorageFalse = () => {
        setStateIsLogged(false);
        sessionStorage.setItem("isLogged", "false");
    };

    return (
        <S.NavWrapper>
            <S.LogoSection>
                <S.Title>Time Sheet</S.Title>
            </S.LogoSection>
            <S.PagesSection>
                <S.Links>
                    <F.StyledLink>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/calendar">Calendar</NavLink>
                        <NavLink to="/" onClick={setUserInSessionStorageFalse}>
                            Sign out
                        </NavLink>
                    </F.StyledLink>
                </S.Links>
            </S.PagesSection>
        </S.NavWrapper>
    );
};

export default NavBarSignOut;
