import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ListView,
  TouchableOpacity,
  ScrollView,
  Text
} from 'react-native';

const CATEGORY_DATA = [
  {icon: require('../../images/category/Jacket.png'), title:'夹克'},
  {icon: require('../../images/category/Dress.png'), title:'连衣裙'},
  {icon: require('../../images/category/Lederhosen.png'), title:'裤子'},
  {icon: require('../../images/category/Romper.png'), title:'连体衣'},
  {icon: require('../../images/category/Scarf.png'), title:'围巾'},
  {icon: require('../../images/category/Shoes.png'), title:'鞋子'},
  {icon: require('../../images/category/Skirt.png'), title:'裙子'},
  {icon: require('../../images/category/Socks.png'), title:'袜子'}
]

const BRAND_DATA = [
  {icon: require('../../images/BE.png'), title:'夹克'},
  {icon: require('../../images/WF.png'), title:'连衣裙'}
]

const DESIGN_DATA = [
  {icon: require('../../images/country/Canada.png'), title:'加拿大'},
  {icon: require('../../images/country/South Korea.png'), title:'韩国'},
  {icon: require('../../images/country/Spain.png'), title:'西班牙'},
  {icon: require('../../images/country/USA.png'), title:'美国'}
]

// get screen width from dimensions object
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;
// cell widhth and height setting
const cellWH = 70;
const vMargin = 15;
const hMargin = 15;

export default class Category extends Component {

  constructor(props){
     super(props);
     var ds = new ListView.DataSource({
         rowHasChanged: (oldRow, newRow) => oldRow !== newRow
     });
     this.state = {
         categoryDataSource:ds.cloneWithRows(CATEGORY_DATA),
         brandDataSource:ds.cloneWithRows(BRAND_DATA),
         designDataSource:ds.cloneWithRows(DESIGN_DATA)
     };
   }

  // return cell data
  renderRow(rowData){
      return(
          <TouchableOpacity>
              <View style={styles.innerViewStyle}>
                  <Image source={rowData.icon} style={styles.iconStyle} />
                  <Text>{rowData.title}</Text>
              </View>
          </TouchableOpacity>
      );
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>热门分类</Text>
              <Text style={styles.sectionSubTitle}>HOT CATEGORIES</Text>
            </View>
            <View style={styles.sectionMore}>
              <TouchableOpacity>
                <Text>更多 ></Text>
              </TouchableOpacity>
            </View>
          </View>
          <ListView dataSource={this.state.categoryDataSource}
              renderRow={this.renderRow}
              contentContainerStyle={styles.listViewStyle}
          />
        </View>

        <View style={styles.separateView} />

        <View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>人气品牌</Text>
              <Text style={styles.sectionSubTitle}>HOT BRANDS</Text>
            </View>
            <View style={styles.sectionMore}>
              <TouchableOpacity>
                <Text>更多 ></Text>
              </TouchableOpacity>
            </View>
          </View>
          <ListView dataSource={this.state.brandDataSource}
              renderRow={this.renderRow}
              contentContainerStyle={styles.listViewStyle}
          />
        </View>

        <View style={styles.separateView} />

        <View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>设计灵感</Text>
              <Text style={styles.sectionSubTitle}>Design Aspiration</Text>
            </View>
            <View style={styles.sectionMore}>
              <TouchableOpacity>
                <Text>更多 ></Text>
              </TouchableOpacity>
            </View>
          </View>
          <ListView dataSource={this.state.designDataSource}
              renderRow={this.renderRow}
              contentContainerStyle={styles.listViewStyle}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    listViewStyle:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'center'
    },

    innerViewStyle:{
      width:cellWH,
      height:cellWH,
      marginLeft:vMargin,
      marginTop:hMargin,
      marginBottom:hMargin,
      alignItems:'center'
    },

    iconStyle:{
      width:50,
      height:50
    },

    separateView: {
        height: 10,
        backgroundColor: '#ecf0f1'
    },

    section: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 15
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 15
    },
    sectionSubTitle: {
      fontSize: 10
    },
    sectionMore: {
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    sectionHeader: {
      flexDirection: 'column'
    }
  }
)
