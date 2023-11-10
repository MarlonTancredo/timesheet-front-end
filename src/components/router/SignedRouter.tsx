import { Routes, Route } from "react-router-dom";
import HomePage from "../home-page/HomePage";
import Calendar from "../calendar/Calendar";
import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";
import NotFoundPage from "../not-found-page/NotFoundPage";

const SignedRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default SignedRouter;
