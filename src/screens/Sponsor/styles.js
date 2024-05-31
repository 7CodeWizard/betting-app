import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    sponsorContainer: {
        padding: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        height: viewportHeight * 0.19,
        borderBottomWidth: 5,
        // borderColor: '#fff',
        borderBottomColor: 'lightblue',
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.7)',
        opacity: 0.9,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10
    },
    mark: {
        width: 30,
        height: 30
    },
    detail: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (viewportWidth - 30) * 0.35,
    },
    pic: {
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: (viewportWidth - 30) * 0.65
    },
    photo: {
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: '100%',
        height: '100%'
    },
    title: {
        padding: 5,
        fontSize: 13
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
