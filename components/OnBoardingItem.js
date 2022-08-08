import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const OnBoardingItem = ({item}) => {

  const {width} = useWindowDimensions();  
  return (
    <View style = {[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {width, resizeMode: 'cover'}]}/>
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        flex: 1,
        justifyContent: 'center',

    },
    title:{
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
    },
    description:{
        fontWeight: '300',
        color: '#493d8a',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
})