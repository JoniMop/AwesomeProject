import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View>
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

//const styles = StyleSheet.create({
//	}
//});
