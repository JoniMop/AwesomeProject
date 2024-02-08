import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
	<View style={styles.inputContainer}>
	  <TextInput style={styles.inputBox} placeholder='Enter task details' />
	  <Button title='Add Task' />
	</View>
	<View style={styles.taskList}>
	 <Text> Tasks </Text>
	</View>  
    </View>
  );
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingTop: 45,
		paddingHorizontal: 15,
		backgroundColor: "green"
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
		borderBottomColor: '#cccccc',
		borderBottomWidth: 1,
		backgroundColor: "red"
	},
	inputBox: {
		width: '75%',
		borderWidth: 1,
		borderColor: '#cccccc',
		padding: 5,
		marginRight: 5,
		borderRadius: 15,
		color: '#fff'
	},
	taskList: {
		flex: 6,
		backgroundColor: 'skyblue'
	}
});
