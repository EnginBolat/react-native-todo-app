import React, { useState, useEffect } from "react";
import { View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './AddTodo.style';

const AddTodo = ({ addTodo, handleInput, text }) => {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Yapılacak..."
                placeholderTextColor="white"
                value={text}
                onChangeText={handleInput}
            />
            <View style={[styles.butttonView, text == '' ? styles.buttonDisabled : styles.buttonActive]}>
                <Button
                    color={'white'}
                    title="Ekle"
                    disabled={text == ''}
                    onPress={addTodo}
                />
            </View>
        </KeyboardAvoidingView>
    );
}

export default AddTodo;