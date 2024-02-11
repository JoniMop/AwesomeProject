import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[task, setTask] = useState("");
  const[taskList, setTaskList] = useState([]);
  
  function taskInputHandler(inputTask) {
	  setTask(inputTask);
  }
  function addNewTask() {
	  setTaskList((currentTaskList) =>
		  [
		  ...currentTaskList,
			  { text: task, id: Math.random().toString()}
		  ]
	  );
  }

  return (
    <View style={styles.mainContainer}>
	<View style={styles.inputContainer}>
	  <TextInput
	  onChangeText={taskInputHandler}
	  style={styles.inputBox} 
	  placeholder='Enter task details' />
	  <Button title='Add Task' onPress={addNewTask}/>
	</View>
	<View style={styles.taskListSection}>
	 <Text style={styles.taskOvervewTitle}> Tasks </Text>
	  {/*<ScrollView> use flatList for better performance, lazy load and fetch*/}
	  <FlatList 
	    data={taskList}
	    renderItem={({item, index})=>{
	   	return (
                   
		      <View style={styles.tastItemStyle} >
			<Text style={styles.taskItemTextStyle}>{index+1}: {item.text}</Text>
		      </View>
		)
	    }}
	   keyExtractor={(item, index)=>{
		   return item.id
	   }}
	   />
		    {/*	    
	  {
		taskList.map((taskItem, index) => {
		  return (
		      <View style={styles.tastItemStyle} key={index} >
			<Text style={styles.taskItemTextStyle}>{index + 1}: {taskItem}</Text>
		      </View>
		  )
	  })
	  }
	  </ScrollView>
		    */}
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
	taskListSection: {
		flex: 6,
		backgroundColor: 'skyblue'
	},
	taskOvervewTitle: {
                fontSize: 22,
		fontWeight: 'bold' 
	},
	tastItemStyle : {
		margin: 6,
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#5f1aca',
		color: "#ffffff"
	},
	taskItemTextStyle: {
		color: "#ffffff"
	}

});
