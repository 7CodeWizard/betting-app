import { StyleSheet, Dimensions } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        width: viewportWidth,
        height: viewportHeight,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        flexDirection: 'row',
        width: viewportWidth * 0.8,
        borderRadius: 10,
    },
    modalLog: {
        // minWidth: viewportWidth * 0.56,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    modalReg: {
        // minWidth: viewportWidth * 0.56,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    modalBtn: {
        maxWidth: viewportWidth * 0.1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBtn1: {
        maxWidth: viewportWidth * 0.1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginBottom: 5,
        padding: 8
    },
    button: {
        borderRadius: 30,
        backgroundColor: '#62b3ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 13,
        marginBottom: 10
    },
    verticalText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 18,
    },
});

export default styles;
