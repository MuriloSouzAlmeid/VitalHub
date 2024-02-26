import styled, { css } from "styled-components";

export const Button = styled.TouchableOpacity`
    padding: 12px 8px;
    border: 1px solid ${props => props.modal ? "#60BFC5" : "#496bba"};
    width: ${props => (props.width != null) ? `${props.width}%` : `100%`};
    background-color: ${props => props.modal ? "#60BFC5" : "#496bba"};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const ButtonLight = styled(Button)`
    background-color: #FBFBFB;
    ${(props) => props.modal && css`
        border-color: #60BFC5;
    `}
`   

export const ButtonGoogle = styled(ButtonLight)`
    flex-direction: row;
    gap: 27px;
`

export const ButtonModal = styled(Button)`
    width: 95%;
` 