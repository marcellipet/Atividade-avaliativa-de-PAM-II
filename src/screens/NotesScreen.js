import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import NoteItem from '../components/NoteItem'
import NoteFormModal from '../components/NoteFormModal'
import { Ionicons } from '@expo/vector-icons'

export default function NotesScreen() {
    const [notes, setNotes] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const addNote = note => {
        setNotes([note, ...notes])
    }

    const deleteNote = id => {
        setNotes(notes.filter(note => note.id !== id))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Minhas Notas</Text>

            <FlatList
                data={notes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <NoteItem note={item} onDelete={deleteNote} />
                )}
                contentContainerStyle={styles.list}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => setModalVisible(true)}>
                <Ionicons name="add" size={28} color="#fff" />
            </TouchableOpacity>

            <NoteFormModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={addNote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 50,
        paddingHorizontal: 16
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#1d3557',
        textAlign: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 8,
    },
    list: {
        paddingBottom: 100
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 30,
        backgroundColor: '#2a9d8f',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    }
})
