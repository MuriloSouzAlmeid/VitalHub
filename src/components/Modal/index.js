import { Modal } from "react-native"
import { BoxInputConsulta, ConsultaModal, DadosConsultaBox, DadosConsultaText, DadosConsultaTitle, LinhaDadosConsulta, ModalConsultaForm, ModalContent, ModalSubtitle, ModalText, ModalTextRow, PatientModal, ResumoConsultaBox } from "./style"
import { ButtonTitle, SemiBoldText, TextRegular, Title } from "../Text/style"
import { ButtonModal } from "../Button/styled"
import { LinkCancel } from "../Link"
import { UserImageModal } from "../UserImage/styled"
import { useState } from "react"
import { ButtonModalConsulta } from "../Button"
import { BoxButtonRow } from "../Box/style"
import { ButtonContinuarBox } from "../Box"

export const CancelattionModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar Consulta</Title>
                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>



                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <LinkCancel manipulationFunction={setShowModalCancel}>Cancelar</LinkCancel>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}

export const ApointmentModal = ({ visible, setShowModalApointment, informacoes, ...resto }) => {


    return (
        <Modal {...resto}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <PatientModal>
                <ModalContent>
                    <UserImageModal
                        source={require("../../assets/images/nicolle_image_modal.png")}
                    />

                    <Title>{informacoes.nome}</Title>

                    <ModalTextRow>
                        <ModalText>{informacoes.idade} anos</ModalText>
                        <ModalText>{informacoes.email}</ModalText>
                    </ModalTextRow>

                    <ButtonModal>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModal>

                    <LinkCancel manipulationFunction={setShowModalApointment}>Cancelar</LinkCancel>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}

export const AgendarConsultaModal = ({ visible, setShowModal, ...resto }) => {

    // state para o nível de consulta
    const [nivelConsulta, setNivelConsulta] = useState("")

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            {...resto}
        >
            <PatientModal>
                <ConsultaModal>
                    <Title>Agendar Consulta</Title>
                    <ModalConsultaForm>
                        <BoxInputConsulta>
                            <ModalSubtitle>Qual o nível da consulta</ModalSubtitle>
                            <BoxButtonRow>
                                <ButtonModalConsulta
                                    buttonText={"Rotina"}
                                    situacao={"rotina"}
                                    actived={nivelConsulta === "rotina"}
                                    manipulationFunction={setNivelConsulta}
                                />
                                <ButtonModalConsulta
                                    buttonText={"Exame"}
                                    situacao={"exame"}
                                    actived={nivelConsulta === "exame"}
                                    manipulationFunction={setNivelConsulta}
                                />
                                <ButtonModalConsulta
                                    buttonText={"Urgência"}
                                    situacao={"urgencia"}
                                    actived={nivelConsulta === "urgencia"}
                                    manipulationFunction={setNivelConsulta}
                                />
                            </BoxButtonRow>
                        </BoxInputConsulta>
                        <BoxInputConsulta>
                            <ModalSubtitle>Informe a localizaçào desejada</ModalSubtitle>
                            <BoxButtonRow>
                                <ButtonModalConsulta
                                    buttonText={"Informe a localização"}
                                    situacao={"rotina"}
                                    actived={false}
                                    manipulationFunction={setNivelConsulta}
                                    widthValue={"100"}
                                />
                            </BoxButtonRow>
                        </BoxInputConsulta>
                    </ModalConsultaForm>
                    <ButtonModal>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonModal>
                    <LinkCancel manipulationFunction={setShowModal}>Cancelar</LinkCancel>
                </ConsultaModal>
            </PatientModal>
        </Modal>
    )
}

export const ConfirmarConsultaModal = ({ visible, setShowModal = null, ...resto }) => {
    return (
        <Modal
            {...resto}
            visible={visible}
            transparent
            animationType="fade"
        >
            <PatientModal>
                <ModalContent>
                    <Title>Agendar consulta</Title>
                    <ResumoConsultaBox>
                        <TextRegular>Consulte os dados selecionados para a sua consulta</TextRegular>
                        <DadosConsultaBox>
                            <LinhaDadosConsulta>
                                <DadosConsultaTitle>Data da consulta</DadosConsultaTitle>
                                <DadosConsultaText>1 de Novembro de 2023</DadosConsultaText>
                            </LinhaDadosConsulta>
                            <LinhaDadosConsulta>
                                <DadosConsultaTitle>Médico(a) da consulta</DadosConsultaTitle>
                                <DadosConsultaText>Dra Alessandra</DadosConsultaText>
                                <DadosConsultaText>Demartologa, Esteticista</DadosConsultaText>
                            </LinhaDadosConsulta>
                            <LinhaDadosConsulta>
                                <DadosConsultaTitle>Local da consulta</DadosConsultaTitle>
                                <DadosConsultaText>São Paulo, SP</DadosConsultaText>
                            </LinhaDadosConsulta>
                            <LinhaDadosConsulta>
                                <DadosConsultaTitle>Tipo da consulta</DadosConsultaTitle>
                                <DadosConsultaText>Rotina</DadosConsultaText>
                            </LinhaDadosConsulta>
                        </DadosConsultaBox>
                    </ResumoConsultaBox>
                    <ButtonContinuarBox
                        manipulationFunction={() => setShowModal(false)}
                    />
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}