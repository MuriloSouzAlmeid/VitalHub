import { useState } from "react"
import { ContainerApp } from "../../components/Container/style/"
import { AgeUserText, ButtonTitle, EmailUserText, Title, UserNamePerfilText } from "../../components/Text/style"
import { UserImagePerfil } from "../../components/UserImage/styled"
import { UserContentBox } from "../../components/Box/style"
import { ContainerProntuario } from "../../components/Container/style"
import { ApointmentFormBox, ProntuarioBox, UserDataApointment } from "./style"
import { BoxInputField } from "../../components/Box"
import { Button } from "../../components/Button/styled"
import { LinkCancel } from "../../components/Link"

export const PaginaDeProntuario = () => {

    const [editavel, setEditavel] = useState(true)

    return (
        <ContainerProntuario>
            <UserImagePerfil
                source={require("../../assets/images/user1-image.png")}
            />
            <ProntuarioBox>
                <UserNamePerfilText editavel={editavel}>Nome do Usuário</UserNamePerfilText>
                <UserDataApointment>
                    <AgeUserText>18 anos</AgeUserText>
                    <EmailUserText editavel={editavel}>exemplo.email@gmail.com</EmailUserText>
                </UserDataApointment>
                <ApointmentFormBox>
                    <BoxInputField
                        apointment
                        fieldHeight="84"
                        placeholderText={"Descrição"}
                        labelText={"Descrição da consulta"}
                        editable
                    />
                    <BoxInputField
                        apointment
                        placeholderText={"Diagnóstico"}
                        labelText={"Diagnóstico do paciente"}
                        editable
                    />
                    <BoxInputField
                        apointment
                        fieldHeight="84"
                        placeholderText={"Prescrição médica"}
                        labelText={"Prescrição médica"}
                        editable
                    />
                </ApointmentFormBox>
                {editavel ? 
                <>
                    <Button onPress={() => setEditavel(false)}>
                        <ButtonTitle>Salvar Edições</ButtonTitle>
                    </Button> 
                </>
                : <Button onPress={() => setEditavel(true)}>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>}
                    
            {editavel ? <LinkCancel manipulationFunction={setEditavel}>Cancelar</LinkCancel> : null}
            </ProntuarioBox>
        </ContainerProntuario>
    )
}