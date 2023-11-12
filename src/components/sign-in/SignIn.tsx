import * as F from "../styles/forms/styles";
import * as S from "./styles";
import { successAlert, warningAlert } from "../styles/alerts/alerts";
import FormButton from "../form-button/FormButton";
import { useReducer, useContext, FormEvent } from "react";
import { isLoggedContext } from "../../app/App";
import { useNavigate } from "react-router-dom";

type InitialState = {
    email: string;
    password: string;
};

type State = {
    email?: string;
    password?: string;
};

type Action = {
    type?: string;
    value?: string;
};

const reducer = (state: State, action: Action): State => {
    const { type, value } = action;
    switch (type) {
        case "email":
            return { ...state, email: value };
        case "password":
            return { ...state, password: value };
        case "clear-all-fields":
            return { ...state, email: "", password: "" };
        default:
            return { ...state };
    }
};

const initialState: InitialState = {
    email: "",
    password: "",
};

const SignIn = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { email, password } = state;
    const { setStateIsLogged } = useContext(isLoggedContext);
    const navigate = useNavigate();

    const clearAllField = () => {
        const action = { type: "clear-all-fields" };
        dispatch(action);
    };

    const handleOnChange = (e: { target: { name: string; value: string } }) => {
        const action = { type: e.target.name, value: e.target.value };
        dispatch(action);
    };

    const handleSignButton = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === "") {
            warningAlert("You must to enter your e-mail!");
            return;
        }

        if (password === "") {
            warningAlert("You must to enter your password!");
            return;
        }

        if (email === "marlon_tancredo@hotmail.com" && password === "123456789") {
            successAlert("Login success!");
            setStateIsLogged(true);
            clearAllField();
            navigate("/calendar");
        } else {
            warningAlert("Wrong login!");
            clearAllField();
        }
    };

    return (
        <F.Wrapper>
            <F.Title>Sign in</F.Title>
            <F.FormWrapper onSubmit={(e) => handleSignButton(e)}>
                <F.Break />
                <F.FieldsNames htmlFor="email">E-mail</F.FieldsNames>
                <F.Input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    maxLength={30}
                    autoComplete="email"
                    onChange={handleOnChange}
                />
                <F.FieldsNames htmlFor="password">Password</F.FieldsNames>
                <F.Input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    maxLength={30}
                    autoComplete="current-password"
                    onChange={handleOnChange}
                />
                <S.SignInSection>
                    <FormButton name="Sign in"></FormButton>
                </S.SignInSection>
            </F.FormWrapper>
        </F.Wrapper>
    );
};

export default SignIn;
