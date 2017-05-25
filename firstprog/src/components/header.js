                    // library
import React from 'react';
import { Text, View } from 'react-native';

                    //components
const Header = (props) => {
    // create styles definition
const { textStyle, viewStyle } = styles;
// main context/action
return (
<View style={viewStyle}>
 <Text style={textStyle}>{props.headerText}</Text>
</View>
);
};

// setup style constants
const styles = {
   // config view style 
   viewStyle: {
backgroundColor: '#F8F8F8',
justifyContent: 'center',
alignItems: 'center',
height: 60,
paddingTop: 15,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.9,
elevation: 2,
position: 'relative'
   },
   // config text style
    textStyle: {
        fontSize: 25
    }
};


            // export to other part
export default Header;
