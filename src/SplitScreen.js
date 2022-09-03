import styled from "styled-components"

const Container = styled.div`
    display: flex;
    // justify-content: space-between;
`;

const Pane = styled.div`
    flex: ${props => props.weight},

`;

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
    // leftProps = name,
    // rightProps = MessageChannel,
    
}) => {
    const [left, right] = children
    return (
        <Container>
            <Pane weight={leftWeight}>
                { left }
            </Pane>
            <Pane weight={rightWeight}>
                { right }
            </Pane>
        </Container>
    )
}