import { Link } from "react-router-dom";

export const PageError404 = () => {
    return (
        <div>
            <h2>404 Not Found</h2>
            <Link to="/">back</Link>
        </div>
    );
};
