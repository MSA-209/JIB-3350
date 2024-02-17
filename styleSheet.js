import { StyleSheet, Dimensions } from 'react-native';

const screenDimension = Dimensions.get("screen");
const isPhone = screenDimension.width < 1000; // Adjust the threshold as needed
const videoWidth = isPhone ? screenDimension.width - 40 : 350; // Adjust the width for phone mode
const videoHeight = isPhone ? (screenDimension.width - 40) * (9 / 16) : 270; // Adjust the height for phone mode

const resolution = 9/16;

export const styles = StyleSheet.create({
// TEXT AND HEADERS
    primaryText: {
        fontSize: 16,
        fontWeight: 600,
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
    feedbackForm: {
        backgroundColor: '#b0afae',
        borderRadius: 10,
        margin: 50,
        width: 1040,
        paddingVertical: 60,
        paddingHorizontal: 60,
        alignSelf: 'center',
    },
    picker: {
        height: 40,
        width: 300,
        marginBottom: 20,
        backgroundColor: '#ffcc01',
        borderRadius: 8,
        fontWeight: '600',
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
        paddingVertical: 5,
        borderRadius: 8,
    },
    starContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        textDecorationColor: 'yellow',
    },
    titleBox: {
        height: 50,
        width: 920,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor: '#525254', 
        textAlignVertical: 'top', 
        marginTop: 10,
        borderWidth: 1,
        padding: 15,
    },
    commentBox: {
        height: 200,
        width: 920,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor: '#525254', 
        textAlignVertical: 'top', 
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
