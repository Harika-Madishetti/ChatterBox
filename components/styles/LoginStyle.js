import { StyleSheet } from 'react-native';

export default StyleSheet.create({
mainBox: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
},
SectionStyle: {
    flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        width: 300,
        borderRadius: 5,
        margin: 10,
},
imageStyle: {
    padding: 1,
        margin: 5,
        height: 35,
        width: 35,
        resizeMode: 'stretch',
        alignItems: 'center',
},
TextContainer: {
    flex:1,
        fontSize: 20,
},
})