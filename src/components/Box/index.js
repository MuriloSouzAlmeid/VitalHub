import { Input } from "../Input";
import { InputField, PerfilInputField } from "../Input/style";
import { InputLabel } from "../Text/style";
import { InputContentBox } from "./style";

export const BoxInputField = ({
    labelText, placeholderText, fieldWidth = "100", 
    keyType = "default", onChangeText = null, maxLength, fieldValue = null, editable = false
}) => 
    <InputContentBox fieldWidth={fieldWidth}>
        <InputLabel>{labelText}</InputLabel>

        <Input
            placeholderText={placeholderText}
            keyboardType={keyType}
            maxLength={maxLength}
            onChangeText={onChangeText}
            value={fieldValue}
            inputPerfil={true}
            editable={editable}
        />
    </InputContentBox>