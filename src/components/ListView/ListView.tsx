import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions as RouterActions } from 'react-native-router-flux';

interface ListViewState {
  items: Array<{
    id: number;
    name: string;
  }>;
}

export default class ListView extends React.Component<{}, ListViewState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => ({ id: index, name: `mitsuruog${index}` })),
    };
  }
  render() {
    return (
      <View>
        {this.state.items.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => RouterActions.listView_detail({ item, title: item.name })}
            >
              <Text style={style.item}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const style = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#118AB2',
    color: '#FFF',
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: '#FFF',
  }
});