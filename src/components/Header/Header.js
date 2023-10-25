import React from "react";
import { Text, View } from 'react-native';
import styles from './Header.style';

export default Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.todoTitle}>Yapılacaklar</Text>
            <Text style={styles.todoCounter}>{props.dataLength}</Text>
        </View>
    );
}