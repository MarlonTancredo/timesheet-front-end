import * as S from "./styles";

import Header from "../components/header/Header";
import Router from "../components/router/Router";

import { BrowserRouter } from "react-router-dom";
import { useState, createContext, Dispatch, SetStateAction, useEffect } from "react";

type IsLoggedContext = {
    stateIsLogged: boolean;
    setStateIsLogged: Dispatch<SetStateAction<boolean>>;
};
export const isLoggedContext = createContext<IsLoggedContext>({ stateIsLogged: false, setStateIsLogged: () => {} });

const App = () => {
    const [stateIsLogged, setStateIsLogged] = useState(false);

    useEffect(() => {
        const data = sessionStorage.getItem("isLogged");
        if (data !== null) {
            setStateIsLogged(JSON.parse(data));
        }
    }, []);

    return (
        <BrowserRouter>
            <isLoggedContext.Provider value={{ stateIsLogged, setStateIsLogged }}>
                <S.AppWrapper>
                    <Header />
                    <S.Content>
                        <Router />
                    </S.Content>
                </S.AppWrapper>
            </isLoggedContext.Provider>
        </BrowserRouter>
    );
};

export default App;
