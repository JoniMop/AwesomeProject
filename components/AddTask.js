import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert, Modal } from 'react-native';

function AddTask(props){

  const[task, setTask] = useState("");
  function taskInputHandler(inputTask) {
	  setTask(inputTask);
  }  

  function addTask(){
   if(task){
     props.addNewTask(task);
     setTask('');
   }else{
	   Alert.alert("This field cannot be empty");
   }
  }
    return(
      <Modal visible={props.visible} animationType="slide" >
	<View style={styles.inputContainer}>
	  <TextInput
	    value={task}
	  onChangeText={taskInputHandler}
	  style={styles.inputBox} 
	  placeholder='Enter task details' />
		<View style={styles.buttonGroup}>
	           <View style={styles.buttonStyle}>
	  		<Button title='Add Task' onPress={addTask}/>
	           </View>
	           <View style={styles.buttonStyle}>
	  		<Button title='Cancel' onPress={addTask}/>
	           </View>
		</View>    
	</View>
       </Modal>
	)
}
export default AddTask;

const styles = StyleSheet.create({

	inputContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		borderBottomColor: '#cccccc',
		borderBottomWidth: 1,
		backgroundColor: "red",
		padding: 15
	},
	inputBox: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#cccccc',
		padding: 5,
		marginRight: 5,
		borderRadius: 15,
		color: '#fff'
	},
	buttonGroup:{
		flexDirection: 'row',
		marginTop: 15

	},
	buttonStyle: {
		width: '35%',
		marginHorizontal: 10
	}
})
