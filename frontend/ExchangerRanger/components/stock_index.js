import React, { Component } from 'react';
import StockIndexItem from './stock_index_item';
import SearchBar from 'react-native-search-bar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
const Platform = require('Platform');

export default class StockIndex extends Component {
  constructor(props){
    super(props);
    this.state={
      stocks: this.props.stocks
    }
    this.filterResults=this.filterResults.bind(this);
  }

  componentDidMount(){
    //updatePrices
  }

  filterResults(value){
    console.log(value);
    console.log(this.state);
    let companies = [];
    this.props.stocks.forEach(company => companies.push(company));
    console.log(companies);

    this.setState({stocks: companies.filter(stock => stock.name.includes(value)||stock.symbol.includes(value))});
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar style={styles.search}
          ref='searchBar'
	        placeholder='Search'
          onChangeText={this.filterResults}
        />
      {this.state.stocks.map(stock => <StockIndexItem stock={stock} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  search: {
    height: 35,
    width: 200
  }
});
