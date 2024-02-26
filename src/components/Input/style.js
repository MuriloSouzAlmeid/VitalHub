import styled from "styled-components";

export const InputField = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    border: 2px solid #49B3BA;
    border-radius: 5px;
    width: 100%;
    padding: 16px;
`

export const InputVirifyEmail = styled(InputField)`
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    text-align: center;
    font-size: 40px;
    font-family: "Quicksand_600SemiBold";
    color: #34898F;
    width: 20%;
    margin-bottom: 30px;
`

export const PerfilInputField = styled(InputField).attrs({
    placeholderTextColor: "#33303E"
})
`
    border-color: #F5F3F3;
    background-color: #F5F3F3;
`

export const ApointmentInputField = styled(InputField).attrs({
    placeholderTextColor: "#34898F"
})
`
    background-color: transparent;
    border-color: #49B3BA;
    padding-bottom: ${props => `${props.fieldHeight}px`};
`