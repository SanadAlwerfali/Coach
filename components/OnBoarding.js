import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import Slides from '../components/Slides';
import OnBoardingItem from '../components/OnBoardingItem';
import Paginator from '../components/Paginator';

const OnBoarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemChanged = useRef(({ viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold:50}).current;
    const slidesRef = useRef(null);
    return (
      <View style={styles.container}>
        <View style = {{flex: 3}}>
        <FlatList data = {Slides} renderItem={({item})=> <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        bounces='false'
        keyExtractor={(item) => item.id}
        onScroll = {Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], 
            { useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged = {viewableItemChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        />
        </View>
        <Paginator data = {Slides} scrollX = {scrollX}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default (OnBoarding);