import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

function AddTask(props){

  const[task, setTask] = useState("");
  function taskInputHandler(inputTask) {
	  setTask(inputTask);
  }  

  function addTask(){
     props.addNewTask(task);
     setTask('');
  }
    return(

	<View style={styles.inputContainer}>
	  <TextInput
	    value={task}
	  onChangeText={taskInputHandler}
	  style={styles.inputBox} 
	  placeholder='Enter task details' />
	  <Button title='Add Task' onPress={addTask}/>
	</View>
	)
}
export default AddTask;

const styles = StyleSheet.create({

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
	}
})
