import { Image } from "react-native";
import { MediumText } from "../Text/style";
import { CancelText, CardBox, CardContent, DataProfileCard, HorarioBox, HorarioText, NameProfileText, ProfileData, TextAge, TextTipoConsulta, ViewRow } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { UserImageCart } from "../UserImage/styled";

export const CardConsulta = ({ consulta, imageSource, statusConsulta }) =>
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
                <CancelText statusConsulta={statusConsulta}>{statusConsulta == "agendada" ? "Cancelar" : (statusConsulta == "realizada" ? "Ver Prontuário" : null)}</CancelText>
            </ViewRow>
        </CardContent>
    </CardBox>