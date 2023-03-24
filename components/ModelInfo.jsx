import React from 'react'
import { useState ,useEffect} from 'react'
import { Button, Image, TouchableOpacity, StyleSheet, Text, View,Switch} from 'react-native'
import { Dimensions } from 'react-native'
import store from '../reducers/store';
const vw=Dimensions.get('window').width
const vh=Dimensions.get('window').height
const scale=Dimensions.get('window').scale
import { SelectList } from 'react-native-dropdown-select-list'
import Slider from '@react-native-community/slider';
// import {ToggleSwitch} from 'toggle-switch-react-native'

let lft=0.0;
function ModelInfo(props) {
    const [selected, setSelected] = React.useState("");
    const [selected1, setSelected1] = React.useState("");
  
    const data = [
        {key:'1', value:"Apples"},
        {key:'2', value:'Avocados'},
        {key:'3', value:'Oranges'},
    ]
    const [isEnabled, setIsEnabled] = useState(false);
    const [motorSpeed, SetmotorSpeed] = useState(0);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
    return (
        <View style={styles.systemSummaryContainer}>
            
            <View style={styles.header}>
                <TouchableOpacity style={styles.profilePicContainer} onPress={()=>{store.dispatch({"type":"Home"});}}>

                <Image source={require("../assets/cross-circle-free-icon-font.png")} style={{"height":"100%","width":"100%", borderRadius:50,}}></Image>
                </TouchableOpacity>
                <Text style={{position:"relative",fontSize:30,alignSelf:"center",right:0.1*vw,marginRight:10}}>
                    {`System Configuration`}
                </Text>
            </View>

            <View style={styles.systemSummary}>
                <Text style={styles.midText} >System Statistics</Text>
                <View style={styles.infoTab}>
                    <Text style={styles.leftSum}>System Status :  </Text>
                    <View style={styles.rightSum}>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        tvParallaxTiltAngle
                    />
                     {(isEnabled)?<Text style={{color:"green"}}>Online</Text> :
                     <Text style={{color:"red"}}>Offline</Text>}
                    </View>
  
                </View>
                <View style={styles.infoTab}>
                    <Text style={styles.leftSum} >System RunningTime :  </Text>
                    <Text style={styles.rightSum}>30 minutes</Text>
                
                </View>

                <View style={styles.infoTab}>
                    <Text style={styles.leftSum}>Fruit Type :  </Text>
                    <View style={styles.rightSum2}>
                        
                    <SelectList 
                        
                        maxHeight={100}
                        maxWidth={0.05*vw}
                        dropdownStyles={{position:"relative",width:0.25*vw,top:-0.15*vw,left:-0.1*vw}}
                        boxStyles={{width:0.38*vw,position:"relative",left:0.16*vw}}
                        setSelected={(val) => setSelected(val)} 
                        data={data} 
                        save="value"
                        placeholder='avocado'
                    />

                    </View>
                </View>

                <View style={styles.infoTab}> 
                    <Text style={styles.leftSum2}>Conveyor Speed:</Text>
                    <View style={styles.rightSum3}>

                        <Text>
                            {parseInt (motorSpeed)} rpm
                        </Text>
                        <Slider
                        style={{width: 100, height: 40}}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={(value)=>{SetmotorSpeed(value)}}
                        />

                    </View>
                 </View>

                <View style={styles.infoTab}>
                     <Text style={styles.leftSum2}>Number of Fruits Classified : </Text> 
                     <Text style={styles.rightSum}>80%</Text>
                </View>
                </View>
               
                <View style={styles.systemSummary1}>
                <View style={styles.infoTab}>
                     <Text style={styles.leftSum2}>Number of Rotten Fruits : </Text> 
                     <Text style={styles.rightSum}>80%</Text>
                </View>
                <View style={styles.infoTab}>
                     <Text style={styles.leftSum2}>Number of Ripe Fruits : </Text> 
                     <Text style={styles.rightSum}>80%</Text>
                </View>
                {/* Add later for raw fruit */}
                {/* <View style={styles.infoTab}>
                     <Text style={styles.leftSum2}>Number of Fruits Classified : </Text> 
                     <Text style={styles.rightSum}>80%</Text>
                </View> */}
               
                
                    <View>
                    <TouchableOpacity  style={{height:50, width:130,backgroundColor:"red"}} onPress={()=>{
                        lft=1*-0.3*vw
                        console.log("hi")
                    }}>
                            
                    <SelectList 
                        maxHeight={100}
                        onSelect={()=>{
                            lft=0.0
                            console.log("ish")
                        }}
                        onPress={()=>{
                            lft=-0.3*vw
                            console.log("hi")
                        }}
                        setSelected={(val) => setSelected(val)} 
                        data={data} 
                        save="value"
                         />
                        <TouchableOpacity style={styles.test} onPress={()=>{
                            store.dispatch({"type":"TestModel"});
                        }}>

                        <Text>Test Model</Text>
                        </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoTab}>
                     <Text style={styles.leftSum2}>Test Outcome : </Text> 
                     <Text style={styles.rightSum}>Ripe</Text>
                </View>
                
                </View>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        height:70,
        width:'100%',
        position:"relative",
        top:0.1*vw,
        zIndex:1,
        backgroundColor:"silver",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    profilePicContainer:{
        position:"relative",
        top:0.065*vh,
        height:40,
        width:40,
    },
    systemSummary:{
        position:"relative",
        height:350,
        width:330,
        borderRadius:20,
        backgroundColor:"silver",
        alignSelf:"center",
        alignItems:"center",
        top:0.05*vh,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        zIndex:0
    },
    systemSummary1:{
        position:"relative",
        height:0.35*vh,
        width:330,
        borderRadius:20,
        backgroundColor:"silver",
        alignSelf:"center",
        alignItems:"center",
        top:0.05*vh,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        zIndex:0
    },
    systemSummaryContainer:{
        height:vh,
        width:vw,
        backgroundColor:"white",
        alignItems:"center",
        position:"relative",
    },
    midText:{
        fontSize:20,
        alignSelf:'center',
        color:"white"
    },
    systemAcuatorsContainer:{
        height:(0.3*vh),
        width:"100%",
        backgroundColor:"white",
    },
    systemAcuators:{
        width:360,
        height:(0.3*vh),
        backgroundColor:"silver",
        alignSelf:"center",
        borderRadius:20,
    },
    infoTab:{
        height:50,
        width:300,
        // backgroundColor:"transparent",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        fontSize:1.8,
        alignItems:"center",

    },
    leftSum:{
        fontSize:17,
        color:"white"
    },
    leftSum2:{
        fontSize:14,
        color:"white"
    },
    rightSum:{
        fontSize:17,
        color:"green",
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    rightSum3:{
        fontSize:17,
        color:"green",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly",
        height:50
    },
    rightSum2:{
        fontSize:13,
        width:0.5*vw
    },
    test:{
        height:0.05*vh,
        // backgroundColor:"red",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        position:"relative",
        left:lft
        
    }
    
})


export default ModelInfo;