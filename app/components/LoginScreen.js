import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import {styles}from './styles/style.js';
import * as Strings from './values/strings.js';


class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };
  }

  render() {
    const{navigation}=this.props;
    return(
    <View   style={{
      flex: 1,
      alignContent:'center',
      padding: 30,
      margin: 50,
      width: undefined,
      height: undefined,

    }}>
    <Text style={styles.text}>{Strings.EMAIL}</Text>
    <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       onChange={(text) => this.setState({text})}
       value={this.state.email}
     />
     <Text style={styles.text}>{Strings.PASSWORD}</Text>
     <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChange={(text) => this.setState({text})}
        value={this.state.password}
      />
    <Button title={Strings.LOGIN} onPress={()=>navigation.navigate('LaunchApp')}></Button>
    </View>

    );
  }

}

export default LoginScreen;
