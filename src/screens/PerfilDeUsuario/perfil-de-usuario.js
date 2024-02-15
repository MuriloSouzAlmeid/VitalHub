import { EmailUserText, SemiBoldText, Title } from "../../components/Text/style";
import { ContainerApp, ContainerForm, ContainerPerfilPage } from "../../components/Container/style";
import { UserImagePerfil } from "../../components/UserImage/styled";
import { BoxInputRow, UserContentBox } from "../../components/Box/style";
import { BoxInputField } from "../../components/Box";

export const PerfilDeUsuario = () =>
    <ContainerPerfilPage>
            <UserImagePerfil
                source={require("../../assets/images/user1-image.png")}
            />
            <UserContentBox>
                <SemiBoldText>Nome do Usuário</SemiBoldText>
                <EmailUserText>exemplo.email@gmail.com</EmailUserText>
            </UserContentBox>




            <ContainerForm>
                <BoxInputField
                    labelText={"Data De Nascimento:"}
                    placeholderText={"12/11/2005"}
                />
                <BoxInputField
                    labelText={"CPF:"}
                    placeholderText={"470.150.038/05"}
                />
                <BoxInputField
                    labelText={"Endereço:"}
                    placeholderText={"Rua Das Goiabeiras, n16 - Pilar Velho"}
                />
                <BoxInputRow>
                    <BoxInputField
                        labelText={"CEP:"}
                        placeholderText={"09432-530"}
                        fieldWidth={47}
                    />
                    <BoxInputField
                        labelText={"Cidade:"}
                        placeholderText={"Ribeirão Pires"}
                        fieldWidth={47}
                    />
                </BoxInputRow>
            </ContainerForm>
    </ContainerPerfilPage>
