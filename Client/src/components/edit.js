import React, { useState,useEffect } from "react";
import { StatusBar, Touchable, TouchableOpacity,SafeAreaView,View, Text,TextInput,StyleSheet,FlatList} from "react-native";
import axios from "axios";
import { ListItem, Avatar } from "react-native-elements";



export default function Edit({route}) {

const {id} = route.params

const [hari,sethari] = useState("")
const [matakuliah,setmatakuliah] = useState("")
const [dosen,setdosen] = useState("")
const [kelas,setkelas] = useState("")



function handleSubmit(){
    const data = {
        hari,
        matakuliah,
        dosen,
        kelas,
    }
    axios.patch(`http://192.168.0.159:5000/api/v1/editCrud/${id}`,data)
    .then((res) => {
            sethari("")
            setdosen("")
            setkelas("")
            setmatakuliah("")
            console.log(res);
        }    
    )
}


return (

    <SafeAreaView >
       
      

<View>
<StatusBar style="auto" />
    <Text style={styles.text}>Edit Schedule</Text>
    <View>
        <Text style={styles.judul}> Hari</Text>
        <TextInput style={styles.text} 
         value={hari} onChangeText={(value)=>sethari(value)}/>
        <Text style={styles.judul}>  Dosen</Text>
        <TextInput style={styles.text}
        value={dosen} onChangeText={(value)=>setdosen(value)} />
        <Text style={styles.judul}>  Mata Kuliah</Text>
        <TextInput style={styles.text}
        value={matakuliah} onChangeText={(value)=>setmatakuliah(value)}/>
        <Text style={styles.judul}>  Kelas</Text>
        <TextInput 
        style={styles.text} value={kelas} onChangeText={(value)=>setkelas(value)} />
        
      <TouchableOpacity style={styles.submit}
      onPress={handleSubmit}><Text>SUBMIT</Text></TouchableOpacity>
    </View>
    

</View>

</SafeAreaView>

)

}
const styles = StyleSheet.create({
  text: {      
           backgroundColor:"white",
           borderColor:"#426A80",
           borderRadius:10,
           fontSize:30,
           textAlign:"center",
           marginTop:5,
           marginBottom:5,
           marginRight:5,
           marginLeft:5,
        },
        submit: {   
          height:30,   
          backgroundColor:"white",
          color:"grey",
          borderColor:"#426A80",
          borderRadius:10,
          fontSize:20,
          textAlign:"center",
          marginTop:5,
          marginBottom:5,
          marginRight:5,
          marginLeft:5,
       },
       judul: {      
        backgroundColor:"transparent",
        borderColor:"#426A80",
        borderRadius:10,
        fontSize:20,
        textAlign:"center",
        marginTop:3,
        marginBottom:3,
        marginRight:5,
        marginLeft:5,
     },
})
