import React,{useEffect, useState} from "react";
import { StatusBar, Touchable, TouchableOpacity,SafeAreaView,View, Text,TextInput,StyleSheet,FlatList} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import axios from "axios";
import { MaterialIcons } from '@expo/vector-icons';



export default function Home({route,navigation}) {
  
const [getList,setGetList] = useState([

])

  useEffect (() => {
    getData()
},[])

const getData = () =>{
  axios.get('http://192.168.0.159:5000/api/v1/cruds')
  .then((res)=>{
    console.log(res.data.data.cruds);
    setGetList(res.data.data.cruds)
  })

}

const handleDelete = (hapus,id) =>{
  axios.delete(`http://192.168.0.159:5000/api/v1/deleteCrud/${id}`)
  .then((res)=>{
    console.log(res);
  })
}

const handleEdit = (route,id) =>{
  axios.delete(`http://192.168.0.159:5000/api/v1/editCrud/${id}`)
  .then((res)=>{
    console.log(res);
  })
}



const _renderItem = ({item}) => {
  return (
    <ListItem
      // onPress={() => navigation.navigate("DetailPost", item)}
      key={item.id}
      bottomDivider
    >

      <Avatar 
        rounded
        title={item.title}
        containerStyle={{ backgroundColor: "black"}}
      />

      <ListItem.Content>
        <ListItem.Title h6 numberOfLines={1}>
          {item.kelas}
        </ListItem.Title>
        
        <ListItem.Subtitle numberOfLines={2}>{item.dosen}</ListItem.Subtitle>
        <ListItem.Subtitle numberOfLines={3}>{item.matakuliah}</ListItem.Subtitle>
        <ListItem.Subtitle numberOfLines={4}>{item.hari}</ListItem.Subtitle>
      </ListItem.Content>
      <TouchableOpacity onPress={() => navigation.navigate("Edit", item)}>
                 <MaterialIcons style={{backgroundColor:"green"}} name="edit" size={18} color='#fff' />
             </TouchableOpacity>
             <TouchableOpacity onPress={ (hapus)=> {handleDelete(hapus,item.id)}}>
                 <MaterialIcons style={{backgroundColor:"red"}} name="delete" size={18} color='#fff' />
             </TouchableOpacity>
    </ListItem>
  )


}

return (

<View  >
<StatusBar style="auto" />
    <Text style={styles.text}>My Schedule</Text>
    <SafeAreaView style={styles.home} >
       <FlatList 
          data={getList}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}    
        />
</SafeAreaView>
   
</View>


)
}
const styles = StyleSheet.create({
  text: {      
           backgroundColor:"white",
           borderColor:"#426A80",
           borderRadius:5,
           fontSize:30,
           textAlign:"center",
           marginTop:5,
           marginBottom:5,
           marginRight:5,
           marginLeft:5,
        },
        home: {      
          backgroundColor:"#173F55",
          borderColor:"#173F55",
          borderTopWidth:1,
          borderBottomWidth:1,
          fontSize:30,
          textAlign:"center",
         
       },
})