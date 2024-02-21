import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    padding: 12px 8px;
    border: 1px solid #496bba;
    width: ${props => (props.width != null) ? `${props.width}%` : `100%`};
    background-color: #496BBA;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const ButtonLight = styled(Button)`
    background-color: #FBFBFB;
`   

export const ButtonGoogle = styled(ButtonLight)`
    flex-direction: row;
    gap: 27px;
`

export const ButtonModal = styled(Button)`
    width: 90%;
` 