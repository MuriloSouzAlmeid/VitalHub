import { Button, View } from "react-native";

export const Navegacao = ({navigation}) => 
    <View>
        <Button
            title={"Login"}
            onPress={() => navigation.navigate("Login")}
        />
        <Button
            title={"Cadastro"}
            onPress={() => navigation.navigate("Cadastro")}
        />
        <Button 
            title="Redefinir Senha"
            onPress={() => navigation.navigate("RedefinirSenha")}
        />
        <Button
            title="Verificar Email"
            onPress={() => navigation.navigate("VerificarEmail")}
        />
        <Button
            title="Página Home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Perfil de Usuário"
            onPress={() => navigation.navigate("PerfilDeUsuario")}
        />
        <Button
            title="Página de Prontuário"
            onPress={() => navigation.navigate("PaginaDeProntuario")}
        />
        <Button
            title="Home Paciente"
            onPress={() => navigation.navigate("PaginaHomePaciente")}
        />
    </View>;