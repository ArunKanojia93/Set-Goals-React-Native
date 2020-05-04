import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

interface GoalInputProps {
  onAddGoal: any;
  visible: boolean;
  onCancel: any;
}

export const GoalInput: React.FC<GoalInputProps> = (props) => {
  const [enteredGoal = '', setEnteredGoal] = useState();
  const {onAddGoal, visible, onCancel} = props;

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={Styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={Styles.input}
          placeholder="Add Goals"
          value={enteredGoal}
        />
        <View style={Styles.cancel}>
          <Button onPress={onCancel} title="CANCEL" color="red" />
        </View>
        <View style={Styles.add}>
          <Button
            onPress={() => {
              onAddGoal(enteredGoal);
              setEnteredGoal('');
            }}
            title="ADD"
          />
        </View>
      </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 8,
    borderColor: 'green',
    width: '72%',
  },
  cancel: {
    width: '40%',
    margin: 8,
  },
  add: {
    width: '40%',
    margin: 8,
  },
});
