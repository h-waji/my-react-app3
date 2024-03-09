/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    const containerStyle = css`
        border: solid 4px gray;
        border-radius: 10px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const titleStyle = css({
        margin: 0,
        color: "blueviolet",
    });

    return (
        <div css={containerStyle}>
            <p css={titleStyle}> Emotion </p>
            <Button>fire</Button>
        </div>
    );
};

const Button = styled.button`
    background-color: yellow;
    border: none;
    padding: 8px;
    border-radius: 8px;

    &:hover {
        background-color: aquamarine;
    }
`;
