import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

interface GoalItemProps {
  item: string;
  onDelete: any;
}

export const GoalItem: React.FC<GoalItemProps> = (props) => {
  const {item, onDelete} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onDelete}
      style={Styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold', opacity: 0.6}}>
        {`Goal:  ${item}`}
      </Text>
      <View style={Styles.dateTime}>
        <Text>{`Date: ${moment().format('MMMM Do YYYY, h:mm:ss A')}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  dateTime: {
    padding: 4,
    margin: 4,
    borderWidth: 0.5,
    opacity: 0.4,
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
});
