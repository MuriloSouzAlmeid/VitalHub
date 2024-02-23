import { ButtonContinuarBox } from "../../components/Box";
import { ListaClinicas, ListaMedicos } from "../../components/FlatList";
import { ContainerSelectPage, TitleSelecao } from "./style";

export const SelecionarClinica = () => {
    const listaClinicas = [
        {
            id: 1,
            nome: "Clínica Natureh",
            localizacao: "São Paulo, SP",
            avaliacao: "4,5",
            disponibilidade: "Seg-Sex"
        },
        {
            id: 2,
            nome: "Diamond Pró-Mulher",
            localizacao: "São Paulo, SP",
            avaliacao: "4,8",
            disponibilidade: "Seg-Sex"
        },
        {
            id: 3,
            nome: "Clinica Villa Lobos",
            localizacao: "Taboão, SP",
            avaliacao: "4,2",
            disponibilidade: "Seg-Sab"
        },
        {
            id: 4,
            nome: "SP Oncologia Clínica",
            localizacao: "Taboão, SP",
            avaliacao: "4,2",
            disponibilidade: "Seg-Sab"
        }
    ]

    return (
        <ContainerSelectPage>
            <TitleSelecao>Selecionar Clínica</TitleSelecao>
            <ListaClinicas
                dados={listaClinicas}
            />
            <ButtonContinuarBox/>
        </ContainerSelectPage>
    )
}

export const SelecionarMedico = () => {
    const listaMedicos = [
        {
            id: 1,
            nome: "Dra.Alessandra",
            especialidades: "Dermatologia, Eletricista",
            foto: "../../assets/images/doctor_image_select.png"
        },{
            id: 2,
            nome: "Dr. Kumushiro",
            especialidades: "Cirurgião, Cardiologista",
            foto: "../../assets/images/doctor_image_select.png"
        },{
            id: 3,
            nome: "Dr. Rodrigo Santos",
            especialidades: "Clínica, Pediatra",
            foto: "../../assets/images/doctor_image_select.png"
        }
    ]

    return (
        <ContainerSelectPage>
            <TitleSelecao>Selecionar Médico</TitleSelecao>
            {/* <ListaSelectPages
            
            /> */}
            <ListaMedicos
                dados={listaMedicos}
            /><ButtonContinuarBox/>
        </ContainerSelectPage>
    )
}

export const SelecionarData = () => {
    return (
        <ContainerSelectPage>
            <TitleSelecao>Selecionar Data</TitleSelecao>
        </ContainerSelectPage>
    )
}