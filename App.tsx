import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import {GoalItem, GoalInput} from './components';

const App: React.FC = () => {
  const [goals = [], setGoals] = useState<any[]>();
  const [visibility = false, setVisibility] = useState();

  const addGoalHandler = (enteredGoal: string) => {
    if (enteredGoal === '') {
      return;
    }
    setGoals((currentGoals: any = []) => [
      ...currentGoals,
      {key: Math.random().toString(), value: enteredGoal},
    ]);
    setVisibility(false);
  };

  const removeGoalHandler = (goalKey: number) => {
    setGoals((currentGoals: any = []) => {
      return currentGoals.filter((goal: any) => goal.key !== goalKey);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setVisibility(false);
  };

  return (
    <View style={Styles.container}>
      <Button title="Add Goal" onPress={() => setVisibility(true)} />
      <GoalInput
        visible={visibility}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goals}
        renderItem={({item}) => (
          <GoalItem
            onDelete={() => removeGoalHandler(item.key)}
            item={item.value}
          />
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
