import { StyleSheet } from "react-native";
import { Colors, Fonts } from 'global/index'


export const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.ORANGE_YELLOW
    },
    row: {
        flexDirection: "row",
        alignItems:'center'
    },

    backIcon: {
        alignItems: 'center',
        alignSelf: 'center'
    },

    name: {
        fontFamily: Fonts.BOLD,
        fontSize: 20
    },
})