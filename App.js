import React, {Component} from 'react'
import {Text, View} from 'react-native'
import BackgroundTask from 'react-native-background-task'

BackgroundTask.define(()=>{
  console.log('Hello from Background')
});

export default class App extends Component {
  componentDidMount() {
    BackgroundTask.schedule()
  }
  render() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Testing</Text>
      </View>
    )
  }
}



















/*import React,{Component} from 'react'
import {Text, View} from 'react-native'
import BackgroundJob from 'react-native-background-job';


const backgroundJob = {
  jobKey: "myJob",
  job: () => console.log("Running in background")
 };
 
 BackgroundJob.register(backgroundJob);
export default class App extends Component {

  render() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Test backgroundJob</Text>
      </View>
    )
  }
}
















/*import React, {Component} from 'react'
import {Text} from 'react-native'
import './socket'
import io from 'socket.io-client/dist/socket.io'

export default class App extends Component{
 constructor() {
   super()
  
 }
 componentDidMount() {
  const socket = io('http://localhost:3000')
  socket.on('connect', ()=>{
    console.log(socket)
    console.log('Iam connected with server')
  })
 }
 
  render(){
      return(
        <Text> Socket connection testing</Text>
      )
  }
}

































//react-native-background-fetch
/*import React, {Component} from 'react'
import {Text, View} from 'react-native'
import BackgroundFetch from 'react-native-background-fetch'
import { Button } from 'native-base';

let MyHeadlessTask = async () => {
  alert('[BackgroundFetch HeadlessTask] start');
 
  // Perform an example HTTP request.
  // Important:  await asychronous tasks when using HeadlessJS.
  let response = await fetch('https://facebook.github.io/react-native/movies.json');
  let responseJson = await response.json();
  alert('[BackgroundFetch HeadlessTask response: ', responseJson);
 
  // Required:  Signal to native code that your task is complete.
  // If you don't do this, your app could be terminated and/or assigned
  // battery-blame for consuming too much time in background.
  BackgroundFetch.finish();
}
export default class App extends Component{
    componentDidMount() {
      // Configure it.
      BackgroundFetch.configure({
        minimumFetchInterval: 15,     // <-- minutes (15 is minimum allowed)
        // Android options
        stopOnTerminate: false,
        startOnBoot: true,
        requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Default
        requiresCharging: false,      // Default
        requiresDeviceIdle: false,    // Default
        requiresBatteryNotLow: false, // Default
        requiresStorageNotLow: false  // Default
      }, () => {
        alert("[js] Received background-fetch event");
        // Required: Signal completion of your task to native code
        // If you fail to do this, the OS can terminate your app
        // or assign battery-blame for consuming too much background-time
        BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
      }, (error) => {
        alert("[js] RNBackgroundFetch failed to start");
      });
   
      // Optional: Query the authorization status.
      BackgroundFetch.status((status) => {
        switch(status) {
          case BackgroundFetch.STATUS_RESTRICTED:
            alert("BackgroundFetch restricted");
            break;
          case BackgroundFetch.STATUS_DENIED:
            alert("BackgroundFetch denied");
            break;
          case BackgroundFetch.STATUS_AVAILABLE:
            alert("BackgroundFetch is enabled");
            break;
        }
      });
      
       
      // Register your BackgroundFetch HeadlessTask
      BackgroundFetch.registerHeadlessTask(MyHeadlessTask);
  }
  
 
  render(){
    
    
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         <Text>foreground</Text>
         
        
      </View>
    )
  }
}













/*import React, {Component} from 'react'
import {Text, View} from 'react-native'
import BackgroundTask from 'react-native-background-task'


BackgroundTask.define(()=>{
  alert('Hello from background')
  BackgroundTask.finish()
})
export default class App extends Component{
  componentDidMount() {
    BackgroundTask.schedule()
  }
  render() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Holla!!!!!</Text>
      </View>
    )
  }
}*/

/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Image
} from 'react-native';

import BackgroundTask from 'react-native-background-task'
import queueFactory from 'react-native-queue';

BackgroundTask.define(async()=>{
    const queue = queueFactory()
    queue.addWorker('pre-fetch-image', async (id, payload) => {
     //alert('Adding')
     //alert(payload)
      Image.prefetch(payload.imageUrl);
  
    });
    BackgroundTask.finish();
}
  
);


export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      queue: null,
      showImages: false
    };

    queueFactory()
      .then(queue => {
        this.setState({queue});
      });

  }

  componentDidMount() {
    BackgroundTask.schedule(); // Schedule the task to run every ~15 min if app is closed.
  }

  createPrefetchJobs() {

    // Create the prefetch job for the first <Image> component.
    this.state.queue.createJob(
      'pre-fetch-image',
      { imageUrl: 'https://i.imgur.com/kPkQTic.jpg' }, // Supply the image url we want prefetched in this job to the payload.
      { attempts: 5, timeout: 15000 }, // Retry job on failure up to 5 times. Timeout job in 15 sec (prefetch is probably hanging if it takes that long).
      false // Must pass false as the last param so the queue starts up in the background task instead of immediately.
    );

    // Create the prefetch job for the second <Image> component.
    this.state.queue.createJob(
      'pre-fetch-image',
      { imageUrl: 'https://i.redd.it/uwvjph19mltz.jpg' }, // Supply the image url we want prefetched in this job to the payload.
      { attempts: 5, timeout: 15000 }, // Retry job on failure up to 5 times. Timeout job in 15 sec (prefetch is probably hanging if it takes that long).
      false // Must pass false as the last param so the queue starts up in the background task instead of immediately.
    );

    // Create the prefetch job for the third <Image> component.
    this.state.queue.createJob(
      'pre-fetch-image',
      { imageUrl: 'https://i.redd.it/39w0xd9ersxz.jpg' }, // Supply the image url we want prefetched in this job to the payload.
      { attempts: 5, timeout: 15000 }, // Retry job on failure up to 5 times. Timeout job in 15 sec (prefetch is probably hanging if it takes that long).
      false // Must pass false as the last param so the queue starts up in the background task instead of immediately.
    );

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title={"Toggle Screen"} onPress={ () => { this.setState({ showImages: !this.state.showImages}) } } />
        {this.state.queue && <Button title={"Pre-fetch Images"} onPress={ this.createPrefetchJobs.bind(this) } />}
        {! this.state.showImages && <Text style={styles.welcome}>Home Screen</Text> }
        {this.state.showImages && <Text style={styles.welcome}>Image Screen</Text> }
        {this.state.showImages && <Image style={styles.image} source={{uri: 'https://i.imgur.com/kPkQTic.jpg'}} permanent={false} /> }
        {this.state.showImages && <Image style={styles.image} source={{uri: 'https://i.redd.it/uwvjph19mltz.jpg'}} permanent={false} /> }
        {this.state.showImages && <Image style={styles.image} source={{uri: 'https://i.redd.it/39w0xd9ersxz.jpg'}} permanent={false} /> }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width:150,
    height: 204
  }
});





/*import React, {Component} from 'react'
import {Text, View} from 'react-native'
import BackgroundTask from 'react-native-background-task'



  //el BackgroundTask.define(task) lazem ttndh foo2 lw7dha w mtb2a4 gwa component w el task eli gwaha da 3bara 3n function gwaha el 7aga eli 3awza anfzha fl background 
  BackgroundTask.define(()=>{
    alert('Hello from background')
    BackgroundTask.finish()
  })
export default class App extends Component{ 
  componentDidMount() {
    // Background.schedul(options) el options dii b7otha ll task zaii msln 3awzah yfdl fl background moda ad eh 
    BackgroundTask.schedule() // dii 3la tool lazem ttnada gwa el componentDidMount
  }
  render() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Holla!!!!!!!</Text>
      </View>
    )
  }
}*/

/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Image
} from 'react-native';

import BackgroundTask from 'react-native-background-task'
import queueFactory from 'react-native-queue';

BackgroundTask.define(async()=>{
    const queue = queueFactory()
    queue.addWorker('pre-fetch-image', async (id, payload) => {
     //alert('Adding')
     //alert(payload)
      Image.prefetch(payload.imageUrl);
  
    });
    BackgroundTask.finish();
}
  
);


export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      queue: null,
      showImages: false
    };

    queueFactory()
      .then(queue => {
        this.setState({queue});
      });

  }

  componentDidMount() {
    BackgroundTask.schedule(); // Schedule the task to run every ~15 min if app is closed.
  }

  createPrefetchJobs() {

    // Create the prefetch job for the first <Image> component.
    this.state.queue.createJob(
      'pre-fetch-image',
      { imageUrl: 'https://i.imgur.com/kPkQTic.jpg' }, // Supply the image url we want prefetched in this job to the payload.
      { attempts: 5, timeout: 15000 }, // Retry job on failure up to 5 times. Timeout job in 15 sec (prefetch is probably hanging if it takes that long).
      false // Must pass false as the last param so the queue starts up in the background task instead of immediately.
    );

    // Create the prefetch job for the second <Image> component.
    this.state.queue.createJob(
      'pre-fetch-image',
      { imageUrl: 'https://i.redd.it/uwvjph19mltz.jpg' }, // Supply the image url we want prefetched in this job to the payload.
      { attempts: 5, timeout: 15000 }, // Retry job on failure up to 5 times. Timeout job in 15 sec (prefetch is probably hanging if it takes that long).
      false // Must pass false as the last param so the queue starts up in the background task instead of immediately.
    );

    // Create the prefetch job for the third <Image> component.
    this.state.queue.createJob(
      'pre-fetch-image',
      { imageUrl: 'https://i.redd.it/39w0xd9ersxz.jpg' }, // Supply the image url we want prefetched in this job to the payload.
      { attempts: 5, timeout: 15000 }, // Retry job on failure up to 5 times. Timeout job in 15 sec (prefetch is probably hanging if it takes that long).
      false // Must pass false as the last param so the queue starts up in the background task instead of immediately.
    );

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title={"Toggle Screen"} onPress={ () => { this.setState({ showImages: !this.state.showImages}) } } />
        {this.state.queue && <Button title={"Pre-fetch Images"} onPress={ this.createPrefetchJobs.bind(this) } />}
        {! this.state.showImages && <Text style={styles.welcome}>Home Screen</Text> }
        {this.state.showImages && <Text style={styles.welcome}>Image Screen</Text> }
        {this.state.showImages && <Image style={styles.image} source={{uri: 'https://i.imgur.com/kPkQTic.jpg'}} permanent={false} /> }
        {this.state.showImages && <Image style={styles.image} source={{uri: 'https://i.redd.it/uwvjph19mltz.jpg'}} permanent={false} /> }
        {this.state.showImages && <Image style={styles.image} source={{uri: 'https://i.redd.it/39w0xd9ersxz.jpg'}} permanent={false} /> }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width:150,
    height: 204
  }
});
*/







//Websocket docss

/*import React, {Component} from 'react'
import {Text, View} from 'react-native'
import { Button } from 'native-base';


var ws = new WebSocket('wss://echo.websocket.org/')
export default class App extends Component {
  constructor() {
    super()
    this.state={
      data:''
    }
  }
  
  componentDidMount() {
    ws.onopen=()=> {
      alert('Socket is open')
      ws.send('Anything')
    }
    ws.onmessage=(e)=>{
      alert(e.data)
    }
    ws.onerror=(e)=>{
      alert(e.message)
    }
  }
  
  
  render() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button rounded onPress={()=> this.retrieveData()}style={{justifyContent:'center', alignItems:'center', width:300}}>
          <Text>Click to getData</Text>
        </Button>
      </View>
    )
  }
}


*/

//Client side socket.io-client

/*
import React, {Component} from 'react'
import {Text,View} from 'react-native'
import './socket'
import io from 'socket.io-client/dist/socket.io'


export default class App extends Component {
  constructor() {
    super()
    this.state={
      name: 'John Doe'
    }
    this.socket= io('http://localhost:3000', {jsonp: false})
    this.socket.on('update', ()=> {
      alert('updated')
        this.setState({
          name:'Nermeen Muhammed'
        })
    })
  }

  /*componentDidMount() {
    try{
    this.socket= io('http://localhost:3000', {jsonp: false})
    }catch(err) {
      alert(err)
    }

  }*/
  /*render() {
    return(
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
 */





























/*
import React, {Component} from 'react'
import {Text, View, Button ,StyleSheet} from 'react-native'

export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      open: false
    }
    this.socket = new WebSocket('wss://echo.websocket.org/')
    this.emit = this.emit.bind(this)
  }

  emit() {
    this.setState({
      open: true
    })
    this.socket.send('It Work !!')
  }

  componentDidMount() {
    this.socket.onopen=()=> this.socket.send(JSON.stringify({type:'greet', payload:'Hello Server'}))
    this.socket.onmessage=({data})=> {alert(data)}
  }
  render() {
    const LED = {
      backgroundColor: this.state.open
      ? 'lightgreen'
      : 'red',
      height: 30,
      position: 'absolute',
      flexDirection: 'row',
      bottom: 0,
      width: 100,
      height: 100,
      top: 120,
      borderRadius: 40,
      justifyContent: 'space-between'
  }
    return(
      <View style={styles.container}>
        <Button onPress={this.emit} title={this.state.open
          ? "Turn off"
          : "Turn on"} color="#21ba45" accessibilityLabel="Learn more about this purple button" />
        <View style={LED}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
  }
});

*/































/*import React, {Component} from 'react'
import {View, Text, TouchableOpacity, AsyncStorage, FlatList} from 'react-native'
import axios from 'axios'


export default class App extends Component {
  constructor() {
    super() 
    this.state={
      title: '',
      year:'',
      data:[]
    }
  }

  componentDidMount() {
    axios.get('https://facebook.github.io/react-native/movies.json')
    .then((response)=> {
     // console.warn(response)
      this.setState({
     //  data: response.movies
     title: response.data.movies[0].title,
     year: response.data.movies[0].releaseYear
      })
    })
  }

  saveData=()=> {
    //alert('Testing')
   // let user= 'John Doe'
   let obj = {
     name: 'John Doe',
     email: 'john@gmail.com',
     city:'Stockholm'
   }
    AsyncStorage.setItem('user', JSON.stringify(obj))
  }

  retrieveData= async()=> {
    try{
      let user = await AsyncStorage.getItem('user')
      let parsed = JSON.parse(user)
      alert(parsed.email)
    }catch(err){
      alert(err)
    }
  }
render() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress={()=> this.saveData()}>
              <Text>Save Data Local</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.retrieveData()}>
              <Text>Retrieve Data </Text>
          </TouchableOpacity>

          <Text style={{color:'red', fontSize:14}}>{this.state.title}</Text>
          <Text>{this.state.year}</Text>
        {/* <FlatList
                  data={this.state.data}
                  renderItem={({item})=> <Text>{item.title}, {item.releaseYear}</Text>}
                  keyExtractor={(item, index)=> item.id}
        />*//*}
          

      </View>
    )
  }
}*/