import React,{Component} from 'react';
import {
  Image
} from 'react-native';

class SplashScreen extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    const {navigation} = this.props;
    setTimeout(()=>{
      navigation.navigate('Login');
    },1000);
  }

  render() {
    return(
    <Image
      source={require('../../assets/img/splash.jpg')}
      style={{
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
      }
   } />
    );
  }
}




export default SplashScreen;
