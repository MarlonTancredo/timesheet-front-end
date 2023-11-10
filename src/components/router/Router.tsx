import SignedRouter from "./SignedRouter";
import SignedOutRouter from "./SignedOutRouter";

type Props = {
    isLogged: boolean;
};

const Router = ({ isLogged }: Props) => {
    if (!isLogged) {
        return <SignedOutRouter />;
    }
    return <SignedRouter />;
};

export default Router;
