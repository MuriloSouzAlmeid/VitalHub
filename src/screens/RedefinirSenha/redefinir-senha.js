import { BoxInput } from "../../components/Box/style";
import { Button } from "../../components/Button/styled";
import { ContainerApp } from "../../components/Container/style";
import { Input } from "../../components/Input";
import { LogoVitalHub } from "../../components/Logo";
import { ButtonTitle, TextRegular, TitleRedefinirSenha } from "../../components/Text/style";

export const RedefinirSenha = ({navigation}) => 
    <ContainerApp>
        <LogoVitalHub/>
        <TitleRedefinirSenha>Redefinir senha</TitleRedefinirSenha>
        <TextRegular>Insira e confirme a sua nova senha</TextRegular>
        <BoxInput>
            <Input
                placeholderText={"Nova senha"}
            />
            <Input
                placeholderText={"confirmar nova senha"}
            />
        </BoxInput>
        <Button onPress={() => navigation.navigate("Login")}>
            <ButtonTitle>Confirmar nova senha</ButtonTitle>
        </Button>
    </ContainerApp>