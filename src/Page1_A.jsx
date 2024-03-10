import { useLocation, useHistory } from "react-router-dom";

export const Page1_A = () => {
    const { state } = useLocation();
    console.log(state);
    
    const history = useHistory();
    const onClickBack = () => history.goBack();

    return (
        <div>
            <h3>Page1-Aだよ</h3>
            <br />
            <button onClick={onClickBack}>back</button>
        </div>
    );
};