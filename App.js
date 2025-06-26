import { GestureHandlerRootView } from "react-native-gesture-handler"
import NotesScreen from "./src/screens/NotesScreen" 
import { StyleSheet } from "react-native"

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NotesScreen /> {}
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
