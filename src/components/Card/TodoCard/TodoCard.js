import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './TodoCard.style'

const TodoCard = ({ item, onPressed, deleteTodo }) => {

    const onLongPressed = () => {
        Alert.alert(item.isDone ? "Yapılmış İşi Sil" :"Yapılacak İşi Sil", "Emin Misin?", [
            {
                text: "Delete",
                onPress: ()=> deleteTodo(item.id)
            },
            {
                text: "Cancel",
                style: "cancel",
            },
        ]);
    };

    const onDeleteConfirmed = (id) => {
        deleteTodo(id);
    };

    return (
        <TouchableOpacity
            onPress={onPressed}
            onLongPress={onLongPressed}
        >
            <View style={[styles.container, item.isDone ? styles.isDone : styles.isNotDone]}>
                <Text style={[styles.title, item.isDone && styles.isDone]}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity >
    );
}

export default TodoCard;