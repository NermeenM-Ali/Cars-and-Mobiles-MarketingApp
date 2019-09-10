
import React, { Component } from "react";
import { Text, Platform } from "react-native";


const AppText = ({ onPress, padding, paddingHorizontal, marginLeft,numberlines, text, color, fontSize, textAlign, fontWeight,textDecorationLine ,marginHorizontal, direction, marginVertical}) => {
    return (
        <Text style={{
            ...styles.text, fontSize: fontSize ? fontSize : styles.text.fontSize,
            color: color ? color : styles.text.color,
            fontWeight: fontWeight ? fontWeight : styles.text.fontWeight,
           textAlign: textAlign && textAlign ,
           paddingHorizontal: paddingHorizontal && paddingHorizontal,
           padding:padding&&padding,
           marginHorizontal:marginHorizontal,
            textDecorationLine:textDecorationLine?textDecorationLine:styles.text.textDecorationLine,
            direction: direction,
            marginVertical: marginVertical,
            marginLeft: marginLeft,
            
            
            

        }} numberOfLines={numberlines?numberlines:null}
        onPress={onPress} >{text}</Text>
    )
}


const styles = {
    text: {
        //fontFamily: Platform.OS == 'ios' ? 'Droid Arabic Kufi' : 'droidkufi',
        color: "#979797",
        fontSize: 14,
        writingDirection: "rtl",
        // fontWeight: "bold",
        textDecorationLine: 'none',
        textDecorationColor:"red",
        
    }
}

export default AppText;