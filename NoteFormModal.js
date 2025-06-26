import React, { useState } from 'react'
import {
    Modal, View, TextInput, Text, StyleSheet, TouchableOpacity
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function NoteFormModal({ visible, onClose, onSave }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState(new Date())

    function saveNote() {
        if (!title.trim() || !description.trim()) return
        onSave({ id: Date.now(), title, description, date })
        setTitle("")
        setDescription("")
        setDate(new Date())
        onClose()
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.header}>Nova Nota</Text>

                    <TextInput
                        placeholder="Título"
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        placeholder="Descrição"
                        style={[styles.input, { height: 80 }]}
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    />
                    <DateTimePicker value={date} mode="date" display="default"
                        onChange={(e, d) => d && setDate(d)} />

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.buttonCancel}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveNote}>
                            <Text style={styles.buttonSave}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        padding: 20
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
    },
    header: {
        // flex: 1,
        // textAlign: 'center',
        // justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#1d3557',
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    buttonCancel: {
        color: '#adb5bd',
        marginRight: 20,
        fontWeight: 'bold'
    },
    buttonSave: {
        color: '#2a9d8f',
        fontWeight: 'bold'
    }
})
