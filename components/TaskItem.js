import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props){
	return (
	<Pressable onPress={props.onDeleteTask}>	
          <View style={styles.taskItemStyle}>
	    <Text style={styles.taskItemTextStyle}>{props.index + 1}: {props.item.text}</Text>
	    <Text style={styles.taskItemTextStyle}>{props.item.id}</Text>
          </View>
	</Pressable>
	)
}

export default TaskItem;

const styles = StyleSheet.create({
	taskItemStyle: {
		margin: 6,
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#5f1aca'
	},
	taskItemTextStyle: {
		color: '#ffffff'
	}

	})
