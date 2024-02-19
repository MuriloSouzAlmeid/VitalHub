import { ButtonSemiBoldTitle, ButtonSemiBoldTitleLight } from "../Text/style"
import { Button, ButtonLight } from "./styled"

export const ButtonHome = ({ widthValue = 30, actived, buttonText, manipulationFunction
}) => {
    return (
        actived ? <Button
            onPress={() => manipulationFunction(buttonText)}
            width={widthValue}>
            <ButtonSemiBoldTitle>{buttonText}</ButtonSemiBoldTitle>
        </Button>
            : <ButtonLight
                onPress={() => manipulationFunction(buttonText)}
                width={widthValue}>
                <ButtonSemiBoldTitleLight>{buttonText}</ButtonSemiBoldTitleLight>
            </ButtonLight>
    )
}