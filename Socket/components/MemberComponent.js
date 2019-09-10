import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import fetchingApi from '../actions/MemberAction'
import { Button } from 'native-base';

 class MemberComponent extends Component { 
    render() {
        const {loading, error, data} = this.props.membersData

        if(loading) {
            return (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>Loading Members...</Text>
                </View>
            )}

            if(error) {
                return (
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text>{error}</Text>
                    </View>
                )}

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Button style={{width:300, justifyContent:'center', alignItems:'center'}} rounded onPress={()=> this.props.fetchingApi()}>
                    <Text style={{color:'white', fontSize:14}}>Load Members</Text>
                </Button>
                {
                    data.map((item, index)=> {
                        <Text key={index}>{item.name}, {item.fname}</Text>
                    })
                }
            </View>
        )
    }
}
const mapDispatchToProps={
    fetchingApi
}
const mapStateToProps=(state)=> ({
    membersData: state.memb
})

export default connect(mapStateToProps, mapDispatchToProps)(MemberComponent)