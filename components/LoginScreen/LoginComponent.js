import React, {Component} from 'react';
import {View,TextInput,TouchableOpacity,Text,Image,AsyncStorage,StatusBar} from 'react-native';
import styles from "../styles/LoginStyle";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        phoneNumber: "",
    }
    validNumber = (number) => {
        this.setState({
            phoneNumber:number
        });
    }
    handlePress = () =>{
        if(!this.state.phoneNumber.length === 10){
            alert("Enter valid phone number");
            return
        }
        let userinfo = {
            phoneNumber: this.state.phoneNumber,
        }
        this.props.registerUser(userInfo)
    }

    render(){
        return(
            <View style={styles.mainBox}>
                <View style={styles.SectionStyle}>
                    <Image source={require('/Users/harikam/Desktop/ChatterBox/components/Icon/callerIcon3.png')}
                           style={[styles.imageStyle]}/>
                    <TextInput
                        style={styles.TextContainer}
                        placeholder="Enter phone number"
                        maxLength={10}
                        keyboardType='numeric'
                        value={this.state.phoneNumber}
                        onChangeText={this.validNumber}
                    />
                </View>
                <View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: this.state.phoneNumber ? '#cc504e' : '#f49f8e' }]}
                                      activeOpacity = { .5 }
                                      disabled={!this.state.phoneNumber}
                                      onPress={this.handlePress}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}