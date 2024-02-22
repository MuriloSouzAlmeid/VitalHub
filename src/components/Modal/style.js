import styled from "styled-components";
import { TextRegular } from "../Text/style";

export const PatientModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.6);
`

export const ModalContent = styled.View`
    padding: 30px 30px 23px;
    width: 90%;
    border-radius: 10px;
    background-color: white;
    align-items: center;
`

export const ModalConsultaForm = styled.View`
    width: 100%;
    margin: 35px 0 125px;
    gap: 20px;
`

export const ModalSubtitle = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
`

export const ModalTextRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 270px;
`

export const ModalText = styled(TextRegular)`
    /* width: 270px; */
    color: #5f5c6b;
    line-height: 22px;
    font-size: 14px;
    margin: 10px 0 30px;
`

export const ConsultaModal = styled(ModalContent)`
    position: absolute;
    width: 99%;
    bottom: 0;
    height: 600px;
`

export const BoxInputConsulta = styled.View`
    gap: 10px;
`