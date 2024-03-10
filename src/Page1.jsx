import { Link } from "react-router-dom";

export const Page1 = () => {
    return (
        <div>
            <h2>Page1</h2>
            <Link to="/page1/A">1-A</Link>
            <br />
            <Link to="/page1/B">1-B</Link>
        </div>
    );
};
