import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    photo: {
        width: viewportWidth * 0.07,
        height: viewportHeight * 0.05
    },
    touch: {
        borderRadius: 50
    },
});

export default styles;
