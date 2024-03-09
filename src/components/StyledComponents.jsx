import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <Container>
            <Title> styled components </Title>
            <Button>fire</Button>
        </Container>
    );
};

const Container = styled.div`
    border: solid 4px gray;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.p`
    margin: 0;
    color: blueviolet;
`;

const Button = styled.button`
    background-color: yellow;
    border: none;
    padding: 8px;
    border-radius: 8px;

    &:hover {
        background-color: aquamarine;
    }
`;
