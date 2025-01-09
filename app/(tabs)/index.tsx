import { View,Text,ScrollView,Image, StyleSheet, TouchableOpacity } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.Background}>
      <View style={styles.BOX}>
        <TouchableOpacity>
          <Image 
            source={require('../../assets/images/shoes.png')} 
            style={styles.IMAGE}/>
        </TouchableOpacity>

        <View style={{paddingTop:25,padding:10}}>

          <Text style={{fontSize:20,fontWeight:200}}>SALE
          </Text>
          <Text style={{fontSize:20,fontWeight:700,textDecorationLine:"line-through",color:'red'}}>Rs. 200
          </Text>
          <Text style={{fontSize:45,fontWeight:800}}>Rs. 199
          </Text>
        </View>

        <TouchableOpacity>
          <View style={{left:185,bottom:15,backgroundColor:'indigo',alignItems:'center',width:55,borderRadius:40,justifyContent:'center'}}>
            <Text style={{fontSize:45,fontWeight:800}}>+
            </Text>

          </View>
        </TouchableOpacity>





        </View>


      

    </View>
  );
}

const styles = StyleSheet.create({
  Background:{
    flex:1,
    backgroundColor:'#121212',
    height:'100%',
    width:'100%',
    justifyContent:"center",
    alignItems:"center",
    
  },
  BOX:{
    padding:20,
    backgroundColor:'#FFFAFA',
    height:400,
    width:250,
    borderRadius:40,
    },

  IMAGE:{
    height:200,
    width:"100%",
    borderRadius:20
  }

});
