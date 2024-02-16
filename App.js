import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/TaskItem.js';
import AddTask from './components/AddTask.js';

export default function App() {
  const[showModal, setShowModal] = useState(false);
  const[taskList, setTaskList] = useState([]);
 

  function showModalHandler(){
	  setShowModal(true);
  } 	

  function addNewTask(newTask) {
	  setTaskList((currentTaskList) =>
		  [
		  ...currentTaskList,
			  { text: newTask, id: Math.random().toString()}
		  ]
	  );
  }
 
   function deleteTask(id) {
	console.log("Delete called");
        setTaskList((currentTaskList)=>{
		return currentTaskList.filter((task)=> task.id !== id)
	})
   }

  return (
    <View style={styles.mainContainer}>
	  <Button title='Add New Task' color={'#f1aca'} onPress={showModalHandler}  />
	  {showModal && <AddTask addNewTask={addNewTask} />}
	<View style={styles.taskListSection}>
	  { taskList.length > 0 ? <Text style={styles.taskOvervewTitle}> Tasks </Text> : <Text></Text> }
	  <FlatList 
	    data={taskList}
	    renderItem={({item, index}) => {
	   	return <TaskItem item={item} index={index} onDeleteTask={deleteTask} />
	    }}
	    keyExtractor={(item, index)=>{
		   return item.id
	   }}
	   />
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
	taskListSection: {
		flex: 6,
		backgroundColor: 'skyblue'
	},
	taskOvervewTitle: {
                fontSize: 22,
		fontWeight: 'bold' 
	}

});
