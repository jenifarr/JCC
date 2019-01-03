import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import styles from "./Common/Styles";


export default class Splash extends Component{
    render (){
        return(
            <View style={styles.container}>
             <View style ={{marginTop:'50%'}}>
            <Image style={styles.mainIcon} source={require('./images/green-android-icon-31.png')}/>
            </View>
            <Text style={styles.title}>Lets Go!</Text>
              {/* <Text style={{fontSize:25, color:'#ffffff', fontWeight:'400'}}>Welcome onboard..</Text> */}
              <Text style={styles.subTitle}>An app helping to make the best decision</Text>
             <View style= {{height:'30%',width:'100%',justifyContent:'flex-end',}}>
              <Text style={{fontSize:14, color:'#ffffff', fontWeight:'400',marginLeft:'35%',opacity:0.7,marginBottom:10}}>Powered by RJIL</Text>
               </View>
            </View>
        );
    }
}

