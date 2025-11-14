import React, {useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Themes} from '../Appdata/colors';
import {university} from '../Utility/ImageUrl';

const {width} = Dimensions.get('screen');

export default function () {
  const [state, setState] = useState({
    data: [
      {
        title: 'Item 1',
        img: university,
      },
      {
        title: 'Item 1',
        img: university,
      },
      {
        title: 'Item 1',
        img: university,
      },
      {
        title: 'Item 1',
        img: university,
      },
    ],
    activeIndex: 0,
  });
  const renderItem = ({item, index}) => {
    console.log(item);
    return (
      <Image
        source={item.img}
        resizeMode="contain"
        style={{
          // backgroundColor: Themes.AppTheme.statusBar,
          borderRadius: 5,
          height: 250,
          width: width - 15,
          // padding: 50,
          marginHorizontal: '2%',
          marginVertical: '2%',
        }}>
        {/* <Text style={{fontSize: 30}}>{item.title}</Text> */}
        {/* <Text>{item.text}</Text> */}
      </Image>
    );
  };
  return (
    <View>
      <Carousel
        layout={'default'}
        data={state.data}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={index => setState({...state, activeIndex: index})}
        autoplay={true}
        loop={true}
      />
    </View>
  );
}
