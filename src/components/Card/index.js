import { Image } from "react-native";
import { MediumText } from "../Text/style";
import { CancelText, CardBox, CardContent, CardTextCancelApointment, DataProfileCard, HorarioBox, HorarioText, NameProfileText, ProfileData, TextAge, TextTipoConsulta, ViewRow } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { UserImageCart } from "../UserImage/styled";

export const CardConsulta = ({ consulta, statusConsulta, onPressCancel, onPressApointment, loadInfoConsulta }) => {

    const abrirModalProntuario = () => {
        onPressApointment();
        loadInfoConsulta(consulta);
    }

    return(
    <CardBox>
        <UserImageCart
            source={require(`../../assets/images/nicolle_image.png`)}
        />
        <CardContent>
            <DataProfileCard>
                <NameProfileText>{consulta.nome}</NameProfileText>
                <ProfileData>
                    <TextAge>{consulta.idade}</TextAge>
                    <TextTipoConsulta>{consulta.nivel}</TextTipoConsulta>
                </ProfileData>
            </DataProfileCard>
            <ViewRow>
                <HorarioBox statusConsulta={statusConsulta}>
                    <AntDesign name="clockcircle" size={14} color={statusConsulta == "agendada" ? "#49B3BA" : "#4E4B59"} />
                    <HorarioText statusConsulta={statusConsulta}>{consulta.horario}</HorarioText>
                </HorarioBox>
                <CardTextCancelApointment 
                    statusConsulta={statusConsulta}
                    onPress={statusConsulta == "agendada" ? (onPressCancel) : (abrirModalProntuario)}
                >
                    {statusConsulta == "agendada" ? "Cancelar" : (statusConsulta == "realizada" ? "Ver Prontuário" : null)}
                </CardTextCancelApointment>
            </ViewRow>
        </CardContent>
    </CardBox>
    )
}