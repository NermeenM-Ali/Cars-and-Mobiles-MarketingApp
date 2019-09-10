import React, {Component} from 'react'
import {StatusBar, View, Text, TouchableOpacity, TextInput} from 'react-native'
import {Field, reduxForm} from 'redux-form'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import * as color from '../Colors'
import AppInput from './AppInput'

const validate = values=> {
    const errors={}
    if(!values.userName) {
        errors.userName = 'Required'
    }else if(values.userName>20) {
        errors.userName = 'UserName must be less than or equal 20 character'
    }

    if(!values.password) {
        errors.password = 'Required'
    }else if(values.password<6) {
        errors.password ='password must be strong'
    }
    return errors
}

class InputComponent extends Component {
        render() {
            const {
                inputRef,returnKeyType,onSubmit,onChange,input,label,borderColor,
                type,password, numeric,textColor,icon,iconType,marginBottom,
                isRTL,iconColor,editable,isRequired,meta: { touched, error, warning },
            } = this.props;
    
            let hasError = false;
            if (error !== undefined) {
                hasError = true;
            }
            return (
                <AppInput
                    onEndEditing={() => input.onBlur(input.value)}
                    onBlur={() => input.onBlur(input.value)}
                    onChange={onChange}
                    ref={inputRef}
                    icon={icon}
                    iconType={iconType}
                    textColor={textColor}
                    marginBottom={marginBottom}
                    hasError={hasError && touched}
                    error={error}
                    input={input}
                    label={label}
                    type={type}
                    isRTL={this.props.isRTL}
                    password={password}
                    numeric={numeric}
                    editable={editable}
                    borderColor={borderColor}
                    iconColor={iconColor}
                    onSubmit={onSubmit}
                    blurOnSubmit={false}
                    returnKeyType={returnKeyType}
                    isRequired={isRequired}
                />
            );
        }
    }
const submit= values=> {
    alert(`Submitting values: ${JSON.stringify(values)}`)
}
class ContactComponent extends Component {
    render() {
        const {handleSubmit}= this.props
        return(
            <View style={{flex:1, backgroundColor: 'white', justifyContent:'center'}}>
                <Field component={InputComponent} name='userName' label='UserName' keyboardType='default'/>
                <Field component={InputComponent} name='password' label='Password' keyboardType='email-address' password/>
                <TouchableOpacity  onPress={handleSubmit(submit)} style={{marginLeft:130, borderRadius:50,margin:10, height:42, width:200,alignItems:'center', backgroundColor:color.MAIN_COLOR}}>
                    <Text style={{color:color.TEXT_COLOR, fontSize:16,  textAlign:'center', marginTop:5, }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const ContactForm = reduxForm({
    form: 'CONTACT',
    validate
})(ContactComponent)

export default ContactForm