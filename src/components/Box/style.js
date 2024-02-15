import styled from "styled-components";

export const BoxInput = styled.View`
    width: 100%;
    gap: 15px;
    align-items: flex-start;
    margin: 20px 0 30px;
`

export const BoxInputRow = styled(BoxInput)`
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
`

export const BoxButton = styled(BoxInput)`
    margin-bottom: 30px;
`

export const ContentAccount = styled.View`
    flex-direction: row;
`

export const UserContentBox = styled.View`
    height: 100px;
    width: 80%;
    border-radius: 5px;
    background-color: white;
    elevation: 10;
    top: 225px;
    left: 10%;
    position: absolute;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 100;
`

export const InputContentBox = styled.View`
    width: ${props => `${props.fieldWidth}%`};
    gap: 10px;
`