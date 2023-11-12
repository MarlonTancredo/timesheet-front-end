import * as F from "../styles/buttons/styles";

type ButtonProps = {
    name?: string;
    formButtonClick?: () => void;
};

const FormButton = ({ name, formButtonClick }: ButtonProps) => {
    return (
        <F.FormButtonWrapper>
            <F.FormButton value={name} type="submit" onSubmit={formButtonClick}></F.FormButton>
        </F.FormButtonWrapper>
    );
};

export default FormButton;
