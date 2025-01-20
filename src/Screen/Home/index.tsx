import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ApplicationStackParamList} from '@/Navigators';
import {Button} from 'react-native-paper';
import MyButton from '@/Components/MyButton';

type HomeScreenNavigationProp = StackNavigationProp<
  ApplicationStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [loading, setloading] = useState(false);

  const handle = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigation.navigate('Chat', {userId: 'userId'});
    }, 3000);
  };

  const renderContent = () => {
    //   <FlatList className='flex flex-row flex-wrap gap-2 '>
    //   {
    //     [1,2,234,234,34234,234,23,34].map((e,index:number)=>{
    //       return (
    //         <View key={index} className='bg-blue-500 p-2 w-[48%] '>
    //           <Text key={e}>{e}</Text>
    //         </View>
    //       )
    //     })
    //   }
    //  </Flat>

    const renderItem = ({item}: {item: number}) => {
      return (
        <View key={item} className="bg-blue-500 p-2 flex-1 w-full mb-3  ">
          <Text>{item}</Text>
        </View>
      );
    };

    return (
      <FlatList
        data={[1, 2, 234, 234, 3423222223453453452, 234, 23, 34]}
        renderItem={renderItem}
        keyExtractor={item => item.toFixed()}
        numColumns={2} // Số cột
        className="w-full"
        columnWrapperStyle={{
          justifyContent: 'space-between',
          gap: 10,
        }} // Khoảng cách giữa các cột
      />
    );
  };

  return (
    <ScrollView className="p-5 gap-5 ">
      <View className="flex flex-col gap-4">
        <Text className="font-bold py-3 bg-green-200 w-auto">HomeScreen</Text>

        <MyButton loading={loading} onPress={handle}>
          Press me
        </MyButton>
        {renderContent()}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
