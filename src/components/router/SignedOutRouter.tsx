import { Routes, Route } from "react-router-dom";
import HomePage from "../home-page/HomePage";
import NotFoundPage from "../not-found-page/NotFoundPage";
import SignIn from "../sign-in/SignIn";
// import SignUp from "../sign-up/SignUp";

const SignedOutRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />}></Route>
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default SignedOutRouter;
