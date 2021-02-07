import { StyleSheet } from "react-native";
import { Colors } from 'global/index';

const HEIGHT = 54;
const SPACING = 20;
const RADIUS = 20;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    },
    tabBarContainer: {
        backgroundColor: Colors.ORANGE_YELLOW,
        height: HEIGHT,
        borderRadius: RADIUS,
        marginHorizontal: SPACING,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:40
    },
    order: {
        // flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    notification: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});