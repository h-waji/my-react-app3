import { useLocation } from "react-router-dom";

export const Page1_A = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <div>
            <h3>Page1-Aだよ</h3>
        </div>
    );
};