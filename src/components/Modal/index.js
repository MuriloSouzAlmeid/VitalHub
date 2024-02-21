import { Modal } from "react-native"
import { ModalContent, ModalText, ModalTextRow, PatientModal } from "./style"
import { ButtonTitle, Title } from "../Text/style"
import { ButtonModal } from "../Button/styled"
import { LinkCancel } from "../Link"
import { UserImageModal } from "../UserImage/styled"

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

export const ApointmentModal = ({visible, setShowModalApointment, informacoes, ...resto}) => {


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