import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const RadioButtons = () => {
    const gender = [
        {
            id : 1,
            name : 'Female',
        },
        {
            id : 2,
            name : 'Male',
        },
        {
            id : 3,
            name : 'Other',
        },
    ];
    const[selectedRadio,setSelectedRadio] = useState(0);
  return (
    <View style={styles.main}>
     {
        gender.map((item , index) => <TouchableOpacity
        key={index}
         onPress={() => setSelectedRadio(item.id)}>
        <View style={styles.radioWrapper}>
         <View style={styles.radio}>
          {
              selectedRadio === item.id ? <View style = {styles.radioBg} ></View> : null
          }
          </View>
           <Text style={styles.radioText}>{item.name}</Text>
        </View>
        </TouchableOpacity> )
     }
   </View>
  );
};
const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        marginRight:100,
    },
    radioText : {
        fontSize:20,
    },
    radio:{
        height:30,
        width:30,
        borderColor:'black',
        borderWidth:2,
        borderRadius:20,
        margin:10,
    },
    radioWrapper:{
        flexDirection: 'row',
        alignItems:'center',
        height:40,
        width:80,
    },
    radioBg:{
        backgroundColor:'black',
        margin:2,
        height:20,
        width:20,
        borderRadius:20,
    },

});
export default RadioButtons;


{/* <TouchableOpacity onPress={() => setSelectedRadio(1)}>
<View style={styles.radioWrapper}>
 <View style={styles.radio}>
  {
      selectedRadio === 1 ? <View style = {styles.radioBg} ></View> : null
  }
  </View>
   <Text style={styles.radioText}>Female</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => setSelectedRadio(2)}>
<View style={styles.radioWrapper}>
<View style={styles.radio}>
  {
      selectedRadio === 2 ? <View style = {styles.radioBg} ></View> : null
  }

 </View>
   <Text style={styles.radioText}>Male</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => setSelectedRadio(3)}>
<View style={styles.radioWrapper}>
 <View style={styles.radio}>
  {
      selectedRadio === 3 ? <View style = {styles.radioBg} ></View> : null
  }
  </View>
   <Text style={styles.radioText}>Other</Text>
 </View>
</TouchableOpacity> */}