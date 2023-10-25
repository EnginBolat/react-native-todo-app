import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 12,
        borderRadius: 4,
    },
    title: {
        padding: 10,
        fontSize: 18,
        color: 'white',
    },
    isDone: {
        backgroundColor: 'grey',
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
    },
    isNotDone: {
        backgroundColor: 'green',
    },
})