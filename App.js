import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
	<View>
	  <TextInput placeholder='Enter task details' />
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
		padding: 100
	}
});
