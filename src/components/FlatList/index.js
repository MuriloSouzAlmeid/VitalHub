import { View } from "react-native"
import { FlatListStyle } from "./style"

export const ListaConsultas = ({dados, }) => {
    return(
        <FlatListStyle
            data={dados}
            keyExtractor={item => item.id}
            renderItem={({item}) => <View></View>}
        />
    )
}