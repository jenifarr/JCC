"use-strict";
import {StyleSheet} from 'react-native';


const styles =StyleSheet.create({
    
    container:{
        flex:1,
        flexDirection:'column',
        height :'100%',
        width:'100%',
        backgroundColor:'#B53471',
        justifyContent:'center',
        alignItems:'center',
        
        },
    mainIcon:{
        height:150, 
        width :150
    },
    title:{
        fontSize:25, 
        color:'#ffffff',
        fontWeight:'400'
    },
    subTitle:{
        fontSize:15, 
        color:'#ffffff',
        width :160,
        textAlign:'center',
        marginTop:10, 
        opacity:0.5
    },
    infocomContainer:{
        position:'absolute',
        left:30,
        right:30,
        bottom:50,
        backgroundColor:'rgba(255,255,255,0.2)',
        height: 200,
        padding:20,
    },
    Input:{
        fontSize:17,
        backgroundColor:'rgba(255,255,255,0.4)',
        color:'#ffffff'

    },
}
);
export default styles;
