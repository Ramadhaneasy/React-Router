import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return(
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-5xl font-bold">Walawee </h1>
            <p className="my-5">Onde Mande Tidak Ketemu</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
    
}

export default ErrorPage;