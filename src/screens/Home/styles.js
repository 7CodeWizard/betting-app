import { StyleSheet, Dimensions } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eef",
    },
    carouselContainer: {
        minHeight: viewportHeight * 0.22
    },
    carousel: {},

    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        width: viewportWidth,
        height: viewportHeight * 0.28
    },
    paginationContainer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        paddingVertical: 8,
        marginTop: viewportHeight * 0.22
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 0
    },
    marqueeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: viewportHeight * 0.001,
        marginBottom: viewportHeight * 0.005,
        width: (viewportWidth - 20),
        borderBottomWidth: 5,
        // borderColor: '#fff',
        borderBottomColor: 'lightblue',
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        opacity: 0.9,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10
    },
    marquee: {
        width: "100%",
        height: viewportHeight * 0.04,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        fontSize: 20,
    },
    marqueeBottom: {
        paddingTop: viewportHeight * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
    },
    button: {
        width: viewportHeight * 0.04,
        height: viewportHeight * 0.04
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    bet: {
        width: viewportWidth * 0.12,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
    },
    photoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    active: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#557af2',
        borderRadius: 49,
    },
    textColor: {
        color: 'white'
    }

});

export default styles;
