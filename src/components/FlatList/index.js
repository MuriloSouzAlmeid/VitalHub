import { View } from "react-native"
import { FlatListStyle } from "./style"
import { CardConsulta } from "../Card"

export const ListaConsultas = ({ dados, statusConsulta, onPressCancel, onPressApointment, loadInfoConsulta }) => {
    return (
        <FlatListStyle
            data={dados}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                statusConsulta == item.situacao ? (
                    <CardConsulta
                        consulta={item}
                        imageSource={item.foto}
                        statusConsulta={statusConsulta}
                        onPressCancel={onPressCancel}
                        onPressApointment={onPressApointment}
                        loadInfoConsulta={loadInfoConsulta}
                    />)
                    : null

            }
            showsVerticalScrollIndicator={false}
        />
    )
}