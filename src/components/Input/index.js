import { ApointmentInputField, InputField, InputVirifyEmail, PerfilInputField } from "./style";

export const Input = ({
    placeholderText, keyType = "default", onChangeText = null, maxLength, fieldvalue = null, verifyEmail = false, inputPerfil = false, editable = false, fieldHeight = "16", apointment = false
}) => {
    if (verifyEmail) {
        return (
            <InputVirifyEmail
                placeholder={placeholderText}
                keyboardType={keyType}
                onChangeText={onChangeText}
                maxLength={maxLength}
                value={fieldvalue}
                editable={editable}
            />
        )
    } else if (inputPerfil) {
        return (
            <PerfilInputField
                placeholder={placeholderText}
                keyboardType={keyType}
                onChangeText={onChangeText}
                maxLength={maxLength}
                value={fieldvalue}
                editable={editable}
            />
        )
    } else if (apointment) {
        return (
            <ApointmentInputField
                placeholder={placeholderText}
                keyboardType={keyType}
                onChangeText={onChangeText}
                maxLength={maxLength}
                value={fieldvalue}
                editable={editable}
                fieldHeight={fieldHeight}
            />
        )
    } else{
        return (
            <InputField
                placeholder={placeholderText}
                keyboardType={keyType}
                onChangeText={onChangeText}
                maxLength={maxLength}
                value={fieldvalue}
                editable={editable}
            />
        )
    }

}