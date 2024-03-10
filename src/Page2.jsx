import { Link } from "react-router-dom";

export const Page2 = () => {
    return (
        <div>
            <h2>Page2</h2>
            <Link to="/page2/66">URL Parameter</Link>
            <br />
            <Link to="/page2/66?name=Miku">Query Parameter</Link>
        </div>
    );
};
