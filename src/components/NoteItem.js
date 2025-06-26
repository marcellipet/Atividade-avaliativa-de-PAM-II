import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AntDesign } from '@expo/vector-icons'

export default function NoteItem({ note, onDelete }) {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.desc}>{note.description}</Text>
                <Text style={styles.date}>
                    {format(new Date(note.date), "dd 'de' MMMM yyyy", { locale: ptBR })}
                </Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(note.id)}>
                <AntDesign name="delete" size={24} color="#e63946" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f9fa',
        padding: 16,
        borderRadius: 12,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
    },
    content: {
        flex: 1,
        marginRight: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#1d3557',
    },
    desc: {
        color: '#495057',
        fontSize: 14,
        marginTop: 4,
    },
    date: {
        marginTop: 8,
        fontSize: 12,
        color: '#6c757d'
    },
})
