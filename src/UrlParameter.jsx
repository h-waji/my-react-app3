import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    // const location = useLocation();
    // console.log(location);
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    console.log(query);
    return (
        <div>
            <h2> UrlParameter </h2>
            <p>parameter is {id}</p>
            <p>query parameter is {query.get("name")}</p>
        </div>
    );
};
