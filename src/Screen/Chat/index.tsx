import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { ApplicationStackParamList, NavigationProps } from '@/Navigators'
import { RouteProp } from '@react-navigation/native';
type ChatScreenRouteProp = RouteProp<ApplicationStackParamList, 'Chat'>;


const ChatScreen = ({ route, navigation }: { route: ChatScreenRouteProp; navigation: any }) => {
  useEffect(() => {
    console.log({route:route.params});
    
  }, [route])
  
  return (
    <ScrollView className='p-5'>
      <Text>ChatScreen</Text>
      <TouchableOpacity
        onPress={()=>navigation.navigate('Home',{user:'dienong'})}
      >
       <View style={{
        backgroundColor:'green',
        padding:20
       }}>
        <Text>
          Back home
        </Text>
       </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ChatScreen