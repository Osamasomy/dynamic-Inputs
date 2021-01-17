import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const SplashScreen = ({navigation})=>{

    React.useEffect(() => {
      setTimeout(()=>{
        navigation.replace('Home')
      },2000)
      return () => {}
    }, [])

    return (
      <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }


export default SplashScreen