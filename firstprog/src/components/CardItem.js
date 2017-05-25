// library
import React from 'react';
import { View } from 'react-native';

// components
const CardItem = (props) => {
return ( 

    <View style={styles.ContainerStyle}>
    {props.children}
    </View>
);
};

const styles = {

ContainerStyle: {
      
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
}
};
// export
export default CardItem;
