import { Header } from "../../components/Header";
import { Calendario } from "../../components/Calendario";
import { ContainerApp, ContainerHome } from "../../components/Container/style";
import { BoxButtonRow } from "../../components/Box/style";
import { Button, ButtonLight } from "../../components/Button/styled";
import { ButtonTitle, ButtonTitleLight } from "../../components/Text/style";
import { ButtonHome } from "../../components/Button";
import { useEffect, useState } from "react";
import { ListaConsultas } from "../../components/FlatList";

export const Home = () => {
    const [statusFiltro, setStatusFiltro] = useState("agendada")

    const consultasAgendadas = [
        {
            id: 1,
            nome: "Miguel Souza",
            idade: 14,
            nivel: "Rotina",
            horario: "14:00",
            foto: "../../assets/images/foto-murilo.jpg",
            situacao: "agendada"
        },{
            id: 2,
            nome: "Mayara Almeida",
            idade: 16,
            nivel: "Exame",
            horario: "18:30",
            foto: "caminhoAqui",
            situacao: "agendada"
        },{
            id: 3,
            nome: "Matheus Dantas",
            idade: 24,
            nivel: "Urgência",
            horario: "21:20",
            foto: "caminhoAqui",
            situacao: "realizada"
        },{
            id: 4,
            nome: "Andréia Katia",
            idade: 41,
            nivel: "Exame",
            horario: "08:50",
            foto: "caminhoAqui",
            situacao: "cancelada"
        },{
            id: 5,
            nome: "Jeferson Júnior",
            idade: 44,
            nivel: "Rotina",
            horario: "10:10",
            foto: "caminhoAqui",
            situacao: "cancelada"
        }
    ]
    
    return (
        <ContainerHome>
            <Header />
            <Calendario />
            <ContainerApp>
                <BoxButtonRow>
                    <ButtonHome
                        buttonText={"Agendadas"}
                        situacao = {"agendada"}
                        actived={statusFiltro === "agendada"}
                        manipulationFunction={setStatusFiltro}
                    />
                    <ButtonHome
                        buttonText={"Realizadas"}
                        situacao = {"realizada"}
                        actived={statusFiltro === "realizada"}
                        manipulationFunction={setStatusFiltro}
                    />
                    <ButtonHome
                        buttonText={"Canceladas"}
                        situacao = {"cancelada"}
                        actived={statusFiltro === "cancelada"}
                        manipulationFunction={setStatusFiltro}
                    />
                </BoxButtonRow>
                <ListaConsultas
                    dados={consultasAgendadas}
                    statusConsulta={statusFiltro}
                />
            </ContainerApp>

        </ContainerHome>
    )
}
