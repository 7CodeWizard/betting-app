import { StyleSheet, Dimensions } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = height * 0.25;
const RECIPE_ITEM_MARGIN = 10;


const styles = StyleSheet.create({
    photo: {
        width: (SCREEN_WIDTH * 0.87 - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15,
    },
    photo1: {
        width: (SCREEN_WIDTH * 0.86 - (2) * RECIPE_ITEM_MARGIN) / 1,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15,
    },
    photo2: {
        width: (SCREEN_WIDTH * 0.87 - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: height * 0.37,
        borderRadius: 15,
    },
    photo3: {
        width: (SCREEN_WIDTH * 0.87 - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: height * 0.16,
        borderRadius: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: (SCREEN_WIDTH * 0.87 - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        // height: RECIPE_ITEM_HEIGHT,
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
        elevation: 10,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: (SCREEN_WIDTH * 0.86 - (2) * RECIPE_ITEM_MARGIN) / 1,
        // height: RECIPE_ITEM_HEIGHT,
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
        elevation: 10,
    },
    touch: {
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default styles;
