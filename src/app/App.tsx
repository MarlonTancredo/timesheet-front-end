import * as S from "./styles";

import Header from "../components/header/Header";
import Router from "../components/router/Router";

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [stateIsLogged] = useState(false);

    return (
        <BrowserRouter>
            <S.AppWrapper>
                <Header isLogged={stateIsLogged} />
                <S.Content>
                    <Router isLogged={stateIsLogged} />
                </S.Content>
            </S.AppWrapper>
        </BrowserRouter>
    );
};

export default App;
