import { StyleSheet, Dimensions } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    descriptionContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        borderBottomWidth: 0.4,
        marginBottom: 10,
        borderBottomColor: "grey",
        borderWidth: 0.5,
        // borderRadius: 15,
        // borderBottomLeftRadius: 0,
        // borderBottomRightRadius: 0,
    },
    photo: RecipeCard.photo,
    eventDetail: {
        padding: 10
    },
    eventTitle: {
        padding: 10,
        flexDirection: 'row'
    },
});

export default styles;
