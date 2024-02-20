import { ButtonSemiBoldTitle, ButtonSemiBoldTitleLight } from "../Text/style"
import { Button, ButtonLight } from "./styled"

export const ButtonHome = ({ widthValue = 30, actived, buttonText, manipulationFunction, situacao
}) => {
    return (
        actived ? <Button
            onPress={() => manipulationFunction(situacao)}
            width={widthValue}>
            <ButtonSemiBoldTitle>{buttonText}</ButtonSemiBoldTitle>
        </Button>
            : <ButtonLight
                onPress={() => manipulationFunction(situacao)}
                width={widthValue}>
                <ButtonSemiBoldTitleLight>{buttonText}</ButtonSemiBoldTitleLight>
            </ButtonLight>
    )
}