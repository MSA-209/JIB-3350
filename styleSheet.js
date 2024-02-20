import { StyleSheet, Dimensions, View, Picker } from 'react-native';
const screenDimension = Dimensions.get("screen");
const isPhone = screenDimension.width < 1000; // Adjust the threshold as needed
const videoWidth = isPhone ? screenDimension.width - 40 : 350; // Adjust the width for phone mode
const videoHeight = isPhone ? (screenDimension.width - 40) * (9 / 16) : 270; // Adjust the height for phone mode

const resolution = 9/16;

export const styles = StyleSheet.create({
// TEXT AND HEADERS
    primaryText: {
        fontSize: 16,
        fontWeight: 400,
        color: 'black',
    },
// Container for horizontal display
    container1: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 50,
        marginRight: 50,
    },
// VIDEO HUB SCREEN
    videoHubHeader: {
        alignItems: 'center', backgroundColor: 'black', height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01" ,
        videoTitle: {
            color: "#FFFFFF",
            fontSize: 20,
            padding: 5,
        }
    },
    videoCard: {
        borderRadius: 8,
        width: videoWidth,
        height: videoHeight,
        backgroundColor: '#ffcc01',
        backgroundColor: 'black',
        margin: 50,
        marginVertical: 40,
        overflow: 'hidden',
        shadowColor: '#848785',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: '#ffcc01',
        borderWidth: 2.5,
        flexDirection: 'row',

    },
    videoStyle: {
        position: 'relative',
        width: isPhone? 345 : resolution * (screenDimension.width),
        height: isPhone? 300 : resolution * (screenDimension.height),
        alignSelf: 'center',
        borderRadius: 8,
        videoDescriptionContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            justifyContent: 'space-between', 
            flexDirection: 'row',
            backgroundColor: '#ffcc01',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            height: 45,
            width: isPhone? 345 : resolution * (screenDimension.width),
            zIndex: 1,
        },
    },
//FEEDBACK SCREEN
    textStylingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    position: 'absolute',
    top: 0,
    right: 0,
    },
    feedbackContainer: {
    position: 'relative',
    },
    text: {
        fontSize: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
    underline: {
        textDecorationLine: 'underline',
    },
    feedbackForm: {
        backgroundColor: '#b0afae',
        borderRadius: 10,
        margin: 50,
        width: isPhone? 350 : 1040,
        height: isPhone? 630 : 'auto',
        paddingVertical: isPhone? 15 : 40,
        paddingHorizontal: isPhone? 10 :60,
        alignSelf: 'center',
    },
    picker: {                              
        height: 40,
        width: 300,
        marginTop: isPhone? 20 : 'auto',
        marginBottom: 20,
        backgroundColor: '#ffcc01',
        borderRadius: 8,
        fontWeight: 500,
        fontSize: 17,
        shadowOffset: 0.3,
        shadowColor: 'black',
        overflow: 'hidden',
        opacity: 0.7,
        paddingHorizontal: isPhone? 10 : 35,

    },
    pickerText: {
        marginTop: isPhone? 15 : 5,
        marginBottom: 15,
        fontSize: isPhone? 16 : 20,
    },
    schoolSelector: {                      // school selector bar
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: isPhone? 1 : 0,
    },
    textScroll: {                           // select school text
        fontWeight: 600, 
        fontSize: 18,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        backgroundColor: '#ffcc01',
        color: 'yellow',
        height: 10,
        fontSize: 18,
        fontWeight: 700,
    },
    submitButton: {
        backgroundColor: '#ffcc01',
        paddingHorizontal: 10,
        paddingVertical: isPhone? 1 : 2,
        borderRadius: 8,
        borderColor: '#525254', 
        borderWidth: 1,
        transitionDuration: '0.5s',
        // cursor: 'pointer',
        // transitionDuration: '0.3s',
        // '&:hover': {
        // transform: 'scale(1.3)',
        // boxShadow: '0 10px 8px rgba(0, 0, 0, 0.5)',
        // shadowOpacity: 0.4,
        // shadowRadius: 4,
        // },
    },
    buttonText: {
        fontSize: isPhone? 14 : 16,
        color: '#525254',
    },
    starContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        textDecorationColor: 'yellow',
    },
    titleBox: {
        height: isPhone? 35 : 50,
        width: isPhone? 300 : 920,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor: '#525254', 
        textAlignVertical: 'top', 
        marginTop: isPhone? 15 : 10,
        borderWidth: 1,
        padding: isPhone? 0 : 15,
    },
    commentBox: {
        height: isPhone? 150 : 200,
        width: isPhone? 300 : 920,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor: '#525254', 
        marginTop: 30,
        borderWidth: 1,
        padding: 15,
    },
//APP.JS SCREEN
    card: {
        marginTop: 0,
        justifyContent: 'center',
        marginHorizontal: 0,
    },
    cardBtn: {
        borderRadius: 10,
        marginHorizontal: 10,
    },
    container: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
        marginHorizontal: 0,
    },
    scrollView: {
        marginHorizontal: 0,
    },
    newsImage: {
        borderWidth: 2,
        borderRadius: 8
    },
    rectangle: {
        height: 8,
        backgroundColor: '#ffcc01',
        position: 'relative', 
    },
});
