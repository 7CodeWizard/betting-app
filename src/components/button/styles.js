import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40
    },
    buttonContainer: {
        width: (width - 40) * 0.65 / 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    touch: {
        borderRadius: 20,
    },
});

export default styles;
