import { View } from "react-native";
import { BoxInputField } from "../../components/Box";
import { UserContentBox } from "../../components/Box/style";
import { Button } from "../../components/Button/styled";
import { ContainerForm, ContainerPerfilPage } from "../../components/Container/style";
import { Input } from "../../components/Input";
import { ButtonTitle, EmailUserText, InputLabel, UserNamePerfilText } from "../../components/Text/style";
import { UserImagePerfil } from "../../components/UserImage/styled";
import { UserDataApointment } from "../Prontuario/style";
import { ButtonImageSubmit, ButtonImageSubmitContent, ButtonImageSubmitText, CancelImageSubmit, ImageInputBox, ImageInputBoxField, ImageInputBoxText, ImageSubmitBox } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const VisualizarPrescricao = () => {
    const dadosPrescricao = {
        descricaoConsulta: "O paciente possuí uma infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante",
        diagnostico: "Infecção no ouvido",
        prescricao:
            `Medicamento: Advil 
Dosagem: 50 mg 
Frequência: 3 vezes ao dia 
Duração: 3 dias`,
        examesMedicos: "",
        resultados:
            `Resultado do exame de sangue : 
tudo normal`
    }

    return (
        <ContainerPerfilPage>
            <UserImagePerfil
                source={require("../../assets/images/doctor_image_perfil.png")}
            />
            <UserContentBox
                editavel
            >
                <UserNamePerfilText editavel>Dr. Lucas</UserNamePerfilText>
                <UserDataApointment>
                    <EmailUserText>Clínico geral</EmailUserText>
                    <EmailUserText editavel>CRM-18293</EmailUserText>
                </UserDataApointment>
            </UserContentBox>
            <ContainerForm>
                <BoxInputField
                    labelText={"Descrição da consulta"}
                    fieldValue={dadosPrescricao.descricaoConsulta}
                    inputPerfil
                    fieldHeight="40"
                />
                <BoxInputField
                    labelText={"Diagnóstico do paciente:"}
                    placeholderText={"diagnóstico"}
                    fieldValue={dadosPrescricao.diagnostico}
                    inputPerfil
                />
                <BoxInputField
                    labelText={"Prescrição médica:"}
                    placeholderText={"prescrição"}
                    fieldValue={dadosPrescricao.prescricao}
                    inputPerfil
                    fieldHeight="40"
                />

                <ImageInputBox>
                    <InputLabel>Exames médicos:</InputLabel>
                    <ImageInputBoxField>
                        <MaterialCommunityIcons name="file-upload-outline" size={24} color="#4E4B59" />
                        <ImageInputBoxText>nenhuma foto informada</ImageInputBoxText>
                    </ImageInputBoxField>
                </ImageInputBox>
                <ImageSubmitBox>
                    <ButtonImageSubmit
                        underlayColor={"#496BBA"}
                        activeOpacity={1}
                    >
                        <ButtonImageSubmitContent>
                            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                            <ButtonImageSubmitText>Enviar</ButtonImageSubmitText>
                        </ButtonImageSubmitContent>
                    </ButtonImageSubmit>
                    <CancelImageSubmit>Cancelar</CancelImageSubmit>
                </ImageSubmitBox>

                <View
                    style={{ height: 0.1, borderBottomWidth: 2, borderStyle: "solid", borderColor: "#8C8A97", width: "100%", borderRadius: 5 }}
                >
                </View>

                <Input
                    inputPerfil
                    placeholderText={"Resultados..."}
                    fieldHeight="60"
                    fieldvalue={dadosPrescricao.resultados}
                />
            </ContainerForm>
        </ContainerPerfilPage>
    )
}