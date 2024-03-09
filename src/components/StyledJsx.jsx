export const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p> StyedJSX </p>
                <button>fire</button>
            </div>
            <style jsx="true">{`
                .container {
                    border: solid 4px gray;
                    border-radius: 10px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            `}</style>
        </>
    );
};