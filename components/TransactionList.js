import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { styles } from './Stylesheet'
 
export class TransactionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [
        {title: 'testitem1', date: '2 sep 2017', points: 10, status: 'added'},
        {title: 'testitem2', date: '5 aug 2017', points: 20, status: 'minus' },
        {title: 'testitem3', date: '3 aug 2017', points: 50, status: 'added'},
        {title: 'testitem4', date: '9 sep 2017', points: 10, status: 'added'},
        {title: 'testitem5', date: '5 jun 2017', points: 20, status: 'minus' },
        {title: 'testitem6', date: '31 aug 2017', points: 50, status: 'added'},
        {title: 'testitem7', date: '20 sep 2017', points: 10, status: 'added'},
        {title: 'testitem8', date: '6 jul 2017', points: 20, status: 'minus' },
        {title: 'testitem9', date: '7 aug 2017', points: 50, status: 'added'}
      ],
    };
  }

  sign(status){
      if(status == 'added'){
          return(<Text style={{fontSize: 25, paddingRight: '10%', marginLeft: '-10%'}}>+</Text>);
      }
      return(<Text style={{fontSize: 25, paddingRight: '10%', marginLeft: '-10%'}}>-</Text>);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  render() {
    return (
      <View style={{flex: 2}}>
          <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              titleStyle={{fontSize: 21}}
              subtitle={item.date}
              subtitleStyle={{fontSize: 16}}
              containerStyle={styles.listItem}
              label={<Text style={{fontSize: 25, marginRight: '3%'}}>{item.points}</Text>}
              hideChevron={true}
              leftIcon={this.sign(item.status)}
            />
            
          )}
          keyExtractor={item => item.date}
        />
      </View>
    );
  }
}

