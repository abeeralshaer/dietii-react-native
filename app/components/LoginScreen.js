import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image
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

     <View style={styles.login_container}>
     <View style={styles.image_container}>
     <Text style={styles.image}></Text>
     </View>
      <View style={styles.email_container}>
      <View style={styles.email}>
       <Text style={styles.email_text}>{Strings.EMAIL}</Text>
      </View>
      <View>
<TextInput
       style={styles.email_input}
       onChange={(text) => this.setState({text})}
       value={this.state.email}
      />
     </View>
      <View>
      <Text style={styles.email_text}>{Strings.PASSWORD}</Text>
      <TextInput
        style={styles.email_input}
        onChange={(text) => this.setState({text})}
        value={this.state.password}
      />
      </View>
<View>
      <Text style={styles.email_text}>{Strings.PASSWORD}</Text>
      <TextInput
        style={styles.email_input}
        onChange={(text) => this.setState({text})}
        value={this.state.password}
      />
      </View>
       </View>
      <View style={styles.button_container}>
       <View style={styles.login_button} >
      <Text >{Strings.LOGIN}</Text>
       </View>
<View style={styles.signup_button}>
      <Text >{Strings.LOGIN}</Text>
</View>  
 <View style={styles.login_button}>
      <Text>{Strings.do_you_have_acount + Strings.LOGIN}</Text>
      </View>    
</View>
     
    
</View>

    );
  }

}

export default LoginScreen;

