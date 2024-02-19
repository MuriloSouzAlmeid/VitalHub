import { Header } from "../../components/Header";
import { Calendario } from "../../components/Calendario";
import { ContainerApp, ContainerHome } from "../../components/Container/style";
import { BoxButtonRow } from "../../components/Box/style";
import { Button, ButtonLight } from "../../components/Button/styled";
import { ButtonTitle, ButtonTitleLight } from "../../components/Text/style";
import { ButtonHome } from "../../components/Button";
import { useEffect, useState } from "react";

export const Home = () => {
    const [statusFiltro, setStatusFiltro] = useState("Agendadas")

    const consultasAgendadas = [
        {
            id: 1,
            nome: "Miguel Souza",
            idade: 14,
            nivel: "Rotina",
            horario: "14:00",
            imagem: "caminhoAqui"
        },{
            id: 2,
            nome: "Mayara Almeida",
            idade: 16,
            nivel: "Exame",
            horario: "18:30",
            imagem: "caminhoAqui"
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
                        actived={statusFiltro === "Agendadas"}
                        manipulationFunction={setStatusFiltro}
                    />
                    <ButtonHome
                        buttonText={"Realizadas"}
                        actived={statusFiltro === "Realizadas"}
                        manipulationFunction={setStatusFiltro}
                    />
                    <ButtonHome
                        buttonText={"Canceladas"}
                        actived={statusFiltro === "Canceladas"}
                        manipulationFunction={setStatusFiltro}
                    />
                </BoxButtonRow>
                <ListaConsultas
                    dados={consultasAgendadas}
                />
            </ContainerApp>

        </ContainerHome>
    )
}
