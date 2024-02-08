import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
	<View style={styles.inputContainer}>
	  <TextInput style={styles.inputBox} placeholder='Enter task details' />
	  <Button title='Add Task' />
	</View>
	<View>
	 <Text> Tasks </Text>
	</View>  
    </View>
  );
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: 45,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	inputBox: {
		width: '75%',
		borderWidth: 1,
		borderColor: '#cccccc',
		padding: 5,
		marginRight: 5,
		borderRadius: 15
	}
});
