import React from 'react';
import {Link, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError() as any
    console.error(error)
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/home'>На главную страницу</Link>
        </div>
    );
};

export default ErrorPage;