import { memo } from "react";

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "lightgreen"   
}

export const ChildArea = memo((props) => {
    const { open, onClidkClose } = props;
    console.log("----- ChildArea -----");
    const data = [...Array(3333).keys()];
    data.forEach((n, i) => {
        // console.log(n, i);
    });

    return (
        <>
            {open ? (
                <div style={style}>
                    <p>
                        child component
                    </p>
                    <button onClick={onClidkClose}>close</button>
                </div>
            ) : null}
        </>
    );
});
