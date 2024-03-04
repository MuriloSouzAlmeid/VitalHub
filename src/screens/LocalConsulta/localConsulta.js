import { BoxInputField } from "../../components/Box";
import { BoxInputRow, UserContentBox } from "../../components/Box/style";
import { Button } from "../../components/Button/styled";
import { ContainerApp, ContainerForm } from "../../components/Container/style";
import { LinkVoltar } from "../../components/Link/style";
import { ButtonTitle, EmailUserText, UserNamePerfilText } from "../../components/Text/style";
import { ClinicaContentBox, ClinicaImage, ContainerLocalConsulta } from "./style";

export const LocalConsulta = () => (
    <ContainerLocalConsulta>
        <ClinicaImage
            source={require("../../assets/images/local_consulta_image.png")}
        />
        <ClinicaContentBox
                editavel={true}
            >
            <UserNamePerfilText editavel={true}>Clinica Natureh</UserNamePerfilText>
            <EmailUserText editavel={true}>São Paulo, SP</EmailUserText>
        </ClinicaContentBox>
        
        <ContainerForm>
                <BoxInputField
                    labelText={"Endereço:"}
                    placeholderText={"Rua Vicenso Silva, 987"}
                    inputPerfil
                />
                
                <BoxInputRow>
                    <BoxInputField
                        labelText={"Número:"}
                        placeholderText={"578"}
                        fieldWidth={47}
                        inputPerfil
                    />
                    <BoxInputField
                        labelText={"Bairro:"}
                        placeholderText={"Moema-SP"}
                        fieldWidth={47}
                        inputPerfil
                    />
                </BoxInputRow>
                <LinkVoltar>
                    Voltar
                </LinkVoltar>
            </ContainerForm>
    </ContainerLocalConsulta>
)