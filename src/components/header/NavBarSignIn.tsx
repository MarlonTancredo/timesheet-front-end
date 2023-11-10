import { NavLink } from "react-router-dom";
import * as S from "../../app/styles";
import * as F from "../styles/forms/styles";

const NavBarSignIn = () => {
    return (
        <S.NavWrapper>
            <S.LogoSection>
                <S.Title>Time Sheet</S.Title>
            </S.LogoSection>
            <S.PagesSection>
                <S.Links>
                    <F.StyledLink>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/sign-in">Sign in</NavLink>
                        {/* <NavLink to="/sign-up">Sign up</NavLink> */}
                    </F.StyledLink>
                </S.Links>
            </S.PagesSection>
        </S.NavWrapper>
    );
};

export default NavBarSignIn;
