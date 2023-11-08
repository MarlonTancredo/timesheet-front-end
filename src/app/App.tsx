import * as F from "../components/styles/forms/styles";
import * as S from "./styles";

import HomePage from "../components/home-page/HomePage";
import SignIn from "../components/sign-in/SignIn";
import SignUp from "../components/sign-up/SignUp";
import Calendar from "../components/calendar/Calendar";
import NotFoundPage from "../components/not-found-page/NotFoundPage";

import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [stateIsLogged, setStateStateIsLogged] = useState(true);

    const handleSendToApp = (isLogged: boolean) => {
        setStateStateIsLogged(isLogged);
    };

    const handleSignOut = () => {
        setStateStateIsLogged(false);
    };

    if (!stateIsLogged) {
        return (
            <S.AppWrapper>
                <S.NavWrapper>
                    <S.LogoSection>
                        <S.Title>Time Sheet</S.Title>
                    </S.LogoSection>
                    <S.PagesSection>
                        <S.Links>
                            <F.StyledLink>
                                <NavLink to="/">Home</NavLink>
                            </F.StyledLink>
                            <F.StyledLink>
                                <NavLink to="/sign-in">Sign in</NavLink>
                            </F.StyledLink>
                            <F.StyledLink>
                                <NavLink to="/sign-up">Sign up</NavLink>
                            </F.StyledLink>
                        </S.Links>
                    </S.PagesSection>
                </S.NavWrapper>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sign-in" element={<SignIn sendToApp={handleSendToApp} />}></Route>
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </S.Content>
            </S.AppWrapper>
        );
    }
    return (
        <S.AppWrapper>
            <S.NavWrapper>
                <S.LogoSection>
                    <S.Title>Time Sheet</S.Title>
                </S.LogoSection>
                <S.PagesSection>
                    <S.Links>
                        <F.StyledLink>
                            <NavLink to="/">Home</NavLink>
                        </F.StyledLink>
                        <F.StyledLink>
                            <NavLink to="/" onClick={handleSignOut}>
                                Sign out
                            </NavLink>
                        </F.StyledLink>
                    </S.Links>
                </S.PagesSection>
            </S.NavWrapper>
            <S.Content>
                <Routes>
                    <Route path="/" element={<Calendar />} />
                </Routes>
            </S.Content>
        </S.AppWrapper>
    );
};

export default App;
