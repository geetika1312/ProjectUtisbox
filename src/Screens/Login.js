import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Themes} from '../Appdata/colors';
import {SignUpButton} from '../Componets/Button';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import Entypo from 'react-native-vector-icons/Entypo';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const data = [
    {label: 'Chetu@.com', value: 'Chetu@.com'},
    {label: 'Dva@.com', value: 'Dva@.com'},
    {label: 'MPS@.com', value: 'MPS@.com'},
    {label: 'DPS@.com', value: 'DPS@.com'},
    {label: 'Amity@.com', value: 'Amity@.com'},
    {label: 'IIT Kanpur@.com	', value: 'IIT Kanpur@.com'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Select Institute
        </Text>
      );
    }
    return null;
  };

  return (
    <>
      <ImageBackground
        source={require('../Assets/Images/bgimg.jpg')}
        style={styles.container}>
        <Text style={styles.title}>Utisbox</Text>
        <Text style={styles.subtitle}>Happy to see you again!</Text>
        <Text style={styles.img}></Text>
        <View style={styles.dropdown}>
          {renderLabel()}
          <Dropdown
            style={[isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select an option' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.formView}>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              onChangeText={e => setEmail(e)}
              style={styles.myInput}
              placeholder="username@gmail.com"
              placeholderTextColor={Themes.AppTheme.black}
            />
          </View>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Password:</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <TextInput
                secureTextEntry={!showPassword}
                onChangeText={e => setPassword(e)}
                style={{...styles.myInput, width: '100%'}}
                placeholder="**********"
                placeholderTextColor={Themes.AppTheme.black}
              />
              <TouchableOpacity
                style={styles.eyeiconButton}
                onPress={() => setShowPassword(!showPassword)}>
                <Entypo
                  name={showPassword ? 'eye' : 'eye-with-line'}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_NAME.FORGOTPASSWORD)}>
          <Text style={styles.alreayTxt}>Forget password ?</Text>
        </TouchableOpacity>
        <SignUpButton
          title={'SIGN IN'}
          style={styles.signUpButton}
          textstyle={styles.txtstyle}
          onPress={() => navigation.navigate(NAVIGATION_NAME.DASHBOARD)}
        />

        {/* <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_NAME.REGISTER)}>
          <Text style={styles.alreayTxt}>
            Don't have an account? Sign up here
          </Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '75%',
    paddingHorizontal: '2%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  img: {
    width: 150,
    height: 100,
    // resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Themes.AppTheme.button,
    paddingTop: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: Themes.AppTheme.black,
  },
  formView: {
    alignSelf: 'center',
    width: '70%',
    marginTop: 20,
  },
  label: {
    color: '#000',
    fontSize: 16,
  },
  myInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    color: Themes.AppTheme.black,
  },
  formSubView: {
    marginBottom: 10,
  },
  tramsView: {
    flexDirection: 'row',
    marginHorizontal: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  tramsxtx: {
    width: 200,
    marginLeft: '5%',
  },
  signUpButton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 20,
  },
  txtstyle: {
    color: '#fff',
  },
  alreayTxt: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  eyeIcon: {
    color: Themes.AppTheme.black,
    fontSize: 18,
  },
  eyeiconButton: {
    position: 'absolute',
    right: 10,
  },
});

// import {View} from 'native-base';
// import React, {useState} from 'react';
// import {Text, Button} from 'react-native';
// const App = () => {
//   let data = 100;
//   const fruit = val => {
//     data = 20;
//     console.warn(data);
//   };
//   return (
//     <View>
//       <Text style={{fontSize: 20}}>{data} </Text>
//       <Button title="On Press" onPress={() => fruit('Hello')} color={'green'} />
//     </View>
//   );
// };
// export default App;
