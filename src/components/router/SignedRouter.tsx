import { Routes, Route } from "react-router-dom";
import HomePage from "../home-page/HomePage";
import Calendar from "../calendar/Calendar";
import NotFoundPage from "../not-found-page/NotFoundPage";

const SignedRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default SignedRouter;
