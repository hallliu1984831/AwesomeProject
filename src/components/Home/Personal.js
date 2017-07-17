import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ListView,
  TouchableOpacity,
  Text
} from 'react-native';

const MINE_DATA = [
  {icon: require('../../images/personal/Order.png'), title:'我的订单'},
  {icon: require('../../images/personal/Coupon.png'), title:'我的优惠券'},
  {icon: require('../../images/personal/Attention.png'), title:'我关注的品牌'},
  {icon: require('../../images/personal/Recommend.png'), title:'我的推荐'},
  {icon: require('../../images/personal/Favorite.png'), title:'我收藏的商品'}
]

const SERVICE_DATA = [
  {icon: require('../../images/personal/Save.png'), title:'意见反馈'},
  {icon: require('../../images/personal/Contact.png'), title:'联系客服'},
  {icon: require('../../images/personal/About.png'), title:'关于小花'}
]

// get screen width from dimensions object
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;

export default class Personal extends Component {

  constructor(props){
     super(props);
     var ds = new ListView.DataSource({
         rowHasChanged: (oldRow, newRow) => oldRow !== newRow
     });
     this.state = {
         mineDataSource:ds.cloneWithRows(MINE_DATA),
         serviceDataSource:ds.cloneWithRows(SERVICE_DATA)
     };
   }

   // return cell data
   renderRow(rowData){
       return(
           <TouchableOpacity>
               <View style={styles.innerViewStyle}>
                   <Image source={rowData.icon} style={styles.iconStyle} />
                   <Text style={{paddingLeft: 5}}>{rowData.title}</Text>
               </View>
           </TouchableOpacity>
       );
   }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <View style={styles.loginContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.logo} source={require('../../images/logo.jpg')} />
              <View style={{width: 20}}/>
              <View style={styles.loginMiddle}>
                <Text style={styles.loginMiddleTitle} onPress={() => navigate('LoginForm')}>立即登录</Text>
                <Text>登录后体验更多服务</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text onPress={() => navigate('LoginForm')}>></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separateView} />
          <ListView dataSource={this.state.mineDataSource}
              renderRow={this.renderRow}
              contentContainerStyle={styles.listViewStyle}
          />
          <View style={styles.separateView} />
          <ListView dataSource={this.state.serviceDataSource}
              renderRow={this.renderRow}
              contentContainerStyle={styles.listViewStyle}
          />
          <View>

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    loginContainer:{
      flexDirection:'row',
      height: 90,
      alignItems:'center',
      justifyContent: 'space-around'
    },
    loginMiddle: {
      flexDirection:'column',
    },
    loginMiddleTitle: {
      fontWeight: 'bold',
      fontSize: 20
    },
    logo: {
      width:60,
      height:60,
      borderRadius:30
    },
    separateView: {
        height: 10,
        backgroundColor: '#ecf0f1'
    },

    listViewStyle:{
      alignItems:'flex-start'
    },

    innerViewStyle:{
      flexDirection: 'row',
      height:30,
      width: screenW-30,
      marginLeft:15,
      marginTop:15,
      borderBottomColor:'#CCCCCC',//cell的分割线
      borderBottomWidth:1
    },

    iconStyle:{
      width:20,
      height:20
    }
  }
)
