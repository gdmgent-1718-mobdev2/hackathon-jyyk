 import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { styles } from './Stylesheet'
 
export class TransactionList extends Component {

  sign(transactionType){
      if(transactionType === 'in'){
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
          data={this.props.data}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              titleStyle={{fontSize: 21}}
              subtitle={item.date}
              subtitleStyle={{fontSize: 16}}
              containerStyle={styles.listItem}
              label={<Text style={{fontSize: 25, marginRight: '3%'}}>{item.amount}</Text>}
              hideChevron={true}
              leftIcon={this.sign(item.transactionType)}
            />
            
          )}
          keyExtractor={item => item.date}
        />
      </View>
    );
  }
}

