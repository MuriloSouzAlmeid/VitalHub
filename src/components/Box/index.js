import { ButtonModal } from "../Button/styled";
import { Input } from "../Input";
import { InputField, PerfilInputField } from "../Input/style";
import { LinkCancel } from "../Link";
import { ButtonTitle, InputLabel } from "../Text/style";
import { InputContentBox } from "./style";

export const BoxInputField = ({
    labelText, placeholderText, fieldWidth = "100",
    keyType = "default", onChangeText = null, maxLength, fieldValue = null, editable = false, fieldHeight = "16", apointment = false, inputPerfil
}) =>
    <InputContentBox fieldWidth={fieldWidth}>
        <InputLabel>{labelText}</InputLabel>

        <Input
            placeholderText={placeholderText}
            keyboardType={keyType}
            maxLength={maxLength}
            onChangeText={onChangeText}
            value={fieldValue}
            inputPerfil={inputPerfil}
            editable={editable}
            fieldHeight={fieldHeight}
            apointment={apointment}
        />
    </InputContentBox>

export const ButtonContinuarBox = ({manipulationFunction = null}) => 
    <>
        <ButtonModal>
            <ButtonTitle>Continuar</ButtonTitle>
        </ButtonModal>

        <LinkCancel manipulationFunction={manipulationFunction}>Cancelar</LinkCancel>
    </>