import { View } from "react-native"
import { FlatListStyle } from "./style"
import { CardConsulta } from "../Card"

export const ListaConsultas = ({dados, statusConsulta}) => {
    return(
        <FlatListStyle
            data={dados}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
            statusConsulta == item.situacao ? (<CardConsulta consulta={item} imageSource={item.foto} statusConsulta={statusConsulta}/>)
            : null
             
            }
        />
    )
}