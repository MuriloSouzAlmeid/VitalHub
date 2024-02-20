import styled from "styled-components";
import { InputLabel, MediumText, TextLight } from "../Text/style";
import { LinkSemiBoldCancel } from "../Link/style";

export const CardBox = styled.View`
    padding: 10px;
    flex-direction: row;
    /* border: 1px solid black; */
    elevation: 2;
    gap: 10px;
    align-items: center;    
    margin: 0 auto 12px;
    width: 100%;
    border-radius: 5px;
    background-color: white;
`

export const CardContent = styled.View`
    height: 80px;
    justify-content: space-between;
`
export const DataProfileCard = styled.View`
    gap: 4px;
`

export const ProfileData = styled.View`
    flex-direction: row;
    gap: 17px;
    /* background-color: red; */
`

export const NameProfileText = styled(MediumText)`
    font-size: 16px;
`

export const TextAge = styled(TextLight)`
    color: #8C8A97;
`

export const TextTipoConsulta = styled(InputLabel)`
    font-size: 14px;
    color: #8C8A97;
`

export const ViewRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 84%;
`

export const HorarioBox = styled.View`
    flex-direction: row;
    gap: 6px;
    border-radius: 5px;
    background-color: ${props => props.statusConsulta == "agendada" ? `#E8FCFD` : `#F1F0F5`};
    padding: 4px;
    align-items: center;
    justify-content: center;
    width: 100px;
`

export const HorarioText = styled(TextTipoConsulta)`
    color: ${props => props.statusConsulta == "agendada" ? `#49B3BA` : `#4E4B59`};

`

export const CancelText = styled(LinkSemiBoldCancel)`
    text-decoration: none;
    color: ${props => props.statusConsulta == "agendada" ? "#C81D25" : "#344F8F"};
    margin-top: -0px;
`