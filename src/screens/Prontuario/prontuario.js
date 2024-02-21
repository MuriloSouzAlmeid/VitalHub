import { useState } from "react"
import { ContainerApp } from "../../components/Container/style/"
import { EmailUserText, Title, UserNamePerfilText } from "../../components/Text/style"
import { UserImagePerfil } from "../../components/UserImage/styled"
import { UserContentBox } from "../../components/Box/style"
import { ContainerProntuario } from "../../components/Container/style"

export const PaginaDeProntuario = () => {
    
    const [editavel, setEditavel] = useState(true)

    return (
        <ContainerProntuario>
            <UserImagePerfil
                source={require("../../assets/images/user1-image.png")}
            />
            <UserContentBox
                editavel={false}
            >
                <UserNamePerfilText editavel={editavel}>Nome do Usuário</UserNamePerfilText>
                <EmailUserText editavel={editavel}>exemplo.email@gmail.com</EmailUserText>
            </UserContentBox>
            <ContainerApp>
                <Title>Prontuário</Title>
            </ContainerApp>
        </ContainerProntuario>
    )
}