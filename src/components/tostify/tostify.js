import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MyToast({ postion, theme }) {
    return (
        <>
            <ToastContainer
                position={postion}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
            />
            {/* Same as */}

        </>
    )
}

export const toastMessage = (type, message) => {
    switch (type) {
        case 'success': successToast(message); break;
        case 'warning': warningToast(message); break;
        case 'error': errorToast(message); break;
    }
}

const successToast = (message) => {
    toast.success(message, {
        toastId: "successHealth",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}

const warningToast = (message) => {
    toast.warn(message, {
        toastId: "warnHealth",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}

const errorToast = (message) => {
    toast.error(message, {
        toastId: "errorHealth",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}