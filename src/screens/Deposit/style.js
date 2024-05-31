import { StyleSheet, Dimensions } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    depositContainer: {
        padding: 15,
        backgroundColor: "rgb(237, 242, 253)"
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 5,
        padding: 10,
        marginBottom: 5,
        // borderColor: '#fff',
        borderBottomColor: 'lightblue',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.8)',
        opacity: 0.9,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10
    },
    bank: {
        flexDirection: 'row',
    },
    title: {
        padding: 5,
        width: viewportWidth * 0.2
    },
    value: {
        padding: 5,
        width: viewportWidth * 0.5
    },
    button: {
        padding: 5,
        width: viewportWidth * 0.2
    },
    touch: {
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    formdata: {
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        borderWidth: 5,
        // borderColor: '#fff',
        marginBottom: 5,
        borderColor: 'blue',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        opacity: 0.9,
    },
    formTitle: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default styles;
