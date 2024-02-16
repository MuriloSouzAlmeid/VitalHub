import { View } from "react-native";
import { Header } from "../../components/Header";
import { Calendario } from "../../components/Calendario";
import { ContainerApp, ContainerHome } from "../../components/Container/style";

export const Home = () =>
    <ContainerHome>
        <Header />
        <ContainerApp>
            <Calendario />
        </ContainerApp>
    </ContainerHome>