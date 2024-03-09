export const InlineStyle = () => {
    const containerStyle = {
        border: "solid 4px gray",
        borderRadius: "10px",
        padding: "8px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    };
    const titleStyle = {
        margin: 0,
        color: "blue",        
    };
    const buttonStyle = {
        backgroundColor: "yellow",
        border: "none",
        padding: "8px",
        borderRadius: "8px",
    };
    return (
        <div style={containerStyle}>
            <p style={titleStyle}> Learning </p>
            <button style={buttonStyle}>hoge</button>
        </div>
    );    
};
