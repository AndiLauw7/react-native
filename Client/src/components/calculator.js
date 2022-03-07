import { StatusBar } from "react-native";
import  React  from "react";
import { View, Text , StyleSheet,} from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";


export default function Calculator() {

const buttonNumbers = ["1","2","3","4","5","6","7","8","9","0","00",","]
const buttonOperator = ["C","-","+","/","*","%","="]


const [displayCount, setDisplayCount] = useState("")
const [display, setDisplay] = useState(" ")


const handleCount = (item) => {
   const lastNumb = display[display.length -1]

   if(lastNumb === "+" || lastNumb === "-" || lastNumb === "*" || lastNumb === "%" ) {
     
      if(lastNumb !== "+" || lastNumb !== "-" || lastNumb !== "*" || lastNumb !== "%" ) {
   
         const newOpr = display.replace(lastNumb, item)

   return setDisplay(newOpr)
   }

   return display

}
else if(item === "C"){
   setDisplay(" ")
   console.log(display);
   setDisplayCount(" ")
}

else if(item === "%"){
   const newOpr = display.replace(lastNumb, "/100")
return setDisplay(newOpr)
}

else {
    setDisplay(display + item)
}
return setDisplayCount(eval(display));
}

    return (
   
      //DISPLAY COUNT
    <View style = {styles.container}>
          
       <View style = {styles.input}>  
       <Text style = {styles.inputText}>{displayCount}</Text>
       <Text style = {styles.inputText}>{display}</Text>
       </View>
        
    
    {/* DISPLAY BODY / BUTTON */}
    <View style= {styles.body}>
       <View style={styles.bodyCount}>{buttonNumbers.map((item) => (
   <TouchableOpacity
   style = {styles.submitOperator} onPress={()=> setDisplay ( currentItem => currentItem + item)}
   key={item}
   >
   <Text style = {styles.submitButtonText}>{item}</Text>
   
</TouchableOpacity>
))}
       </View>

   <View style={styles.button}>
   {buttonOperator.map((item) => (
    <TouchableOpacity
       style = {styles.submitNumber}
       onPress={()=> handleCount(item)}
       key={item}
       >
       <Text style = {styles.submitButtonT} key={item}>{item}</Text>
    </TouchableOpacity>
    ))}
   </View>
 </View> 
 </View>
    );
}


// const styles = StyleSheet.create({
//     container: {
//         flexDirection:"column",
//         backgroundColor: '#173F55',
//         height:"100%",
//         width:"100%"
//     },
//     body:{
//         width:"100%",
//         height:80,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         // backgroundColor: '#rgba(255, 160, 160, 1)',
//         marginHorizontal:1,
//         marginVertical:0,
//         marginBottom:4,
        
      
//     },
//     input: {
//        height: 250,
//        backgroundColor:"transparent",
//        borderColor:"#426A80",
//        borderRadius:10,
//        fontSize:50,
//        alignItems:"stretch",
//        borderWidth: 1,
//        marginTop:35,
//        marginBottom:10,
//        marginRight:10,
//        marginLeft:10,
//     },
//     submitButton: {
//         borderRadius:10,
//        backgroundColor: 'transparent',
//        alignItems:'center',
//        justifyContent:'center',
//        marginTop:1,
//        marginHorizontal:10,
//        height:70,
//        width:70,
       
//     },
//     submit: {
//         borderRadius:10,
//         backgroundColor: 'transparent',
//         alignItems:'center',
//         justifyContent:'center',
//         marginTop:1,
//         marginHorizontal:10,
//         height:70,
//         width:70,
//      },
//     submitButtonText:{
//        color: 'white',
//        fontSize:30,
//        fontWeight:"bold"
//     },
//     submitButtonCount:{
//         color: '#00E05A',
//         fontSize:30,
//         fontWeight:"bold"
//      },
//     inputText:{
//         flex:1,
//         color:"white",
//         fontSize:30,
//         fontWeight:"700",
//         justifyContent:"flex-end",
//         alignItems:"flex-end",
//         marginLeft:10,
//         marginTop:5,
//     }
//  })

 const styles = StyleSheet.create({

   container: {
   //   flex:1,
     flexDirection:"column",
      backgroundColor: "#173F55",
      height:"100%",
      width:"100%"
 
   },
   input: {
     flex:1,
     maxHeight: "50%",
     borderColor:"#426A80",
     borderWidth: 1,
     marginTop:5,
     borderRadius:2,
     marginRight:10,
     marginLeft:10,
    marginBottom:10
   },
   inputText: {
     color: "white",
     fontSize: 25,
     textAlign: "right",
     justifyContent:"flex-end",
     alignItems:"flex-end"
   },

  body : {
      flexDirection: "row",
      flexWrap: "wrap",
      flex:1,
      justifyContent:"center",
     justifyContent: "center",
     alignItems: "center"
 
   },

   bodyCount: {
     flexDirection: "row",
     flex: 3,
     flexWrap: "wrap"
   },


  button: {
     flexDirection: "column",
     flex: 1,
     flexWrap: "wrap",
     alignItems: "center",
     height: "90%",
     borderRadius: 8,
   
     
   },
  submitOperator : {
     paddingTop:20,
     marginLeft:15,
     width: "25%",
     height: "30%",
    //  backgroundColor:"#426A80",
   },
   submitNumber : {
     width: "70%",
     backgroundColor:"#426A80",
   
     
    
   },

   submitButtonText: {
     fontSize: 30,
     fontWeight: "bold",
     textAlign: "center",
     color: "white"
   },

   submitButtonT: {
     fontSize: 27,
     fontWeight: "bold",
     textAlign: "center",
     color: "#00E05A",
     alignItems:"center",
     justifyContent:"center"
   }
 })