import React, {Component} from 'react';
import { Text,Image,View,TextInput,SafeAreaView,KeyboardAvoidingView, TouchableOpacity } from "react-native";
import styles from '../Common/Styles'

 export default class login extends Component{
     render(){
    return(
        // <SafeAreaView style={{flex:1, flexDirection:'column', backgroundColor:'#932a5c',justifyContent:'center', alignItems:'center'}}>
        <View style={{flex:1, flexDirection:'column', backgroundColor:'#932a5c',justifyContent:'center', alignItems:'center'}}>
        <Image style={{height:50, width:50}} source={require('../Common/images/green-android-icon-31.png')}/>
        {/* <Text style={{width:'100%',fontSize:20, fontWeight:'bold', color:'#ffffff',textAlign:'center'}}>LOGIN HERE</Text> */}

        <Text></Text>

        <View style={styles.infocomContainer} >
        <View style={{flexDirection:'row',height:'20%'}}>
        <Text style={{width:'40%',fontSize:14, color:'#ffffff',fontWeight:'600',opacity:0.8,}}>LOGIN HERE</Text>
       <Text style={{width:'26.7%'}}> --OR-- </Text>
       {/* <TouchableOpacity style={{width:'33.3%',height:'2%', alignSelf:'center',borderRadius:20, backgroundColor:'#51b0ba'}}> */}
       <Text style={{width:'33.3%',fontSize:14, color:'#ffffff',fontWeight:'600',opacity:0.85}}>REGISTER</Text>
      {/* </TouchableOpacity>  */}
      </View>
        <TextInput style={styles.Input}
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.5)"
        keyboardType='email-address'
        returnKeyType="next"
        autoCorrect={false}
        autoCapitalize='words'
        />
        </View>
   
        <View ></View> 
    
       </View>
    //    </SafeAreaView>

    );
   }
 }

 