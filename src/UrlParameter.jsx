import { useParams } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    return (
        <div>
            <h2> UrlParameter </h2>
            <p>{id}</p>
        </div>
    );
};
