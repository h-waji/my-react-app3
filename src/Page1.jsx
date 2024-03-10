import { Link } from "react-router-dom";

export const Page1 = () => {
    const arr = [...Array(66).keys()];
    console.log(arr);
    return (
        <div>
            <h2>Page1</h2>
            <Link to={{ pathname: "/page1/A", state: arr }}>1-A</Link>
            <br />
            <Link to="/page1/B">1-B</Link>
        </div>
    );
};
