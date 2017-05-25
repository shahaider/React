//library

import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

//component 
const AlbumDetail = ({ record }) => {
    // destructuring 
    const { title, artist, thumbnail_image, image, url } = record;
return (
<Card>
    <CardItem>
        <View style={styles.thumbnailContainer}>
            <Image style={styles.ImageContent}
             source={{ uri: thumbnail_image }}/>
        </View>
            <View style={styles.HeaderContainer}>
            <Text style={styles.HeadertextStyle}>{title}</Text>
            <Text>{artist}</Text>
            </View>
    </CardItem>
    
    <CardItem>
    <Image 
    style={styles.biggerTN}
    source={{ uri: image }}/>
    </CardItem>
    
    <CardItem>
    <Button onPress={() => Linking.openURL(url)}>
        BUY NOW
    </Button>
    </CardItem>
</Card>
);
};

const styles = {
HeaderContainer: {
flexDirection: 'column',
justifyContent: 'space-around'
},

ImageContent: {
height: 50,
width: 50
},

thumbnailContainer: {
justifyContent: 'center',
alignItem: 'center',
marginLeft: 10,
marginRight: 10
},

HeadertextStyle: {
    fontSize: 18
},

biggerTN:{

    height: 300,
    width: null,
    flex: 1
   

}
};
//export
export default AlbumDetail;
