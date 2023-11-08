import Swal from "sweetalert2";
import colors from "../colors/styles";
const { blue } = colors;

export const succesAlert = (message: string) => {
    Swal.fire({
        title: message,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: blue,
    });
};

export const warningAlert = (message: string) => {
    Swal.fire({
        title: message,
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: blue,
    });
};

export const errorAlert = (message: string) => {
    Swal.fire({
        title: message,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: blue,
    });
};
