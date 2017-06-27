import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'thesans',
    fontWeight: '200',
    color: '#c39797'

  },
  container:{
    flex: 1,
    backgroundColor:'#ffdab9'
  },
  login_container:{
    flex:1,
    backgroundColor: 'white',
    
   
  },
  image_container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    

  
  },
  image:{
   backgroundColor:'red',
   width:100,
   height:100,
   marginLeft:100,
   marginRight:100,
   marginTop:180,
   marginBottom:180,
   borderRadius:100
   
  },
  email_container:{
    flex:1,
    alignItems:'flex-end',
    marginRight:25,
    marginBottom:20,
  },
  email:{
    flex:1,
     
  },
  email_text:{
    fontFamily:'thesans'
  },
  email_input:{

  },
  button_container:{
    flex:1,
    marginLeft:50,
    marginRight:50,
    justifyContent:'space-between'
  },
  login_button:{
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
    borderRadius:10,
    
  },
  signup_button:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
    borderRadius:10,
    
    }

});

