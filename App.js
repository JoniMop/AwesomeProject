import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/TaskItem.js';
import AddTask from './components/AddTask.js';

export default function App() {
  const[taskList, setTaskList] = useState([]);
  
  function addNewTask(newTask) {
	  setTaskList((currentTaskList) =>
		  [
		  ...currentTaskList,
			  { text: newTask, id: Math.random().toString()}
		  ]
	  );
  }

  return (
    <View style={styles.mainContainer}>
	  <AddTask addNewTask={addNewTask}  />
	<View style={styles.taskListSection}>
	 <Text style={styles.taskOvervewTitle}> Tasks </Text>
	  <FlatList 
	    data={taskList}
	    renderItem={({item, index}) => {
	   	return <TaskItem item={item} index={index} />
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
