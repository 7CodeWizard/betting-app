import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    discountContainer: {
        padding: 15
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 5,
        // borderColor: '#fff',
        borderBottomColor: 'lightblue',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.7)',
        opacity: 0.9,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10
    },
    photo: {
        borderRadius: 15,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        width: '100%',
        height: 250,
    },
    title: {
        padding: 10,
    },
    touch: {
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    endTitle: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
