import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';




let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;




export default StyleSheet.create({

    //main use for background, also a good template to copy/paste for a new background
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        width: deviceWidth,
        height: 'auto',

    },
    //AI permission screen background
    aiContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,

    },
    //AI Screen permission button
    aiButton: {
        backgroundColor: 'limegreen',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth / 1.4,
        height: deviceHeight / 13,
        borderWidth: 2,
        borderColor: 'darkgreen',

    },
    aiButtonText: {
        color: 'black',
        fontSize: deviceHeight / 27
    },
    //The big paragraph on the AI screen
    aiParagraphText: {
        color: 'limegreen',
        fontSize: deviceHeight / 20,
        marginTop: deviceHeight / 100,
        marginBottom: deviceHeight / 20,
        marginLeft: deviceWidth / 15,
        marginRight: deviceWidth / 15,
        textAlign: 'center',
    },
    //AI screen widget in the homescreen
    aiWidget: {
        width: deviceWidth/1.01,
        backgroundColor: '#2B7555',
        borderColor: '#787878',
        borderRadius: 20,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
    },
    //button in the AI Widget
    aiWidgetButton: {
        borderRadius: 20,
        height: deviceHeight / 30,
        width: deviceWidth / 2.4,
        alignItems: 'center',
        backgroundColor: '#2B2D35',
        borderWidth: 2,
        borderColor: 'white',
        color: 'black',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: deviceWidth / 55,
    },

    //wildlife screen background
    wildLifeContainer: {
        flex: 1,
        backgroundColor: '#2B2D35',
        alignItems: 'center',
        width: deviceWidth,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
        color: 'white',

    },
    //header for the wildlife page
    paragraphTextWildlife: {
        color: 'white',
        fontSize: deviceHeight / 25,
        marginTop: deviceHeight / 100,
        marginBottom: deviceHeight / 100,
        marginLeft: deviceWidth / 15,
        marginRight: deviceWidth / 15,
        textAlign: 'center',
    },
    //image on wildlife page
    smallImage: {
        width: 350,
        height: 250,
        borderRadius: 10,
        margin: 10,
    },
    //animal name on wildlife page
    animalName: {
        color: 'white',
        textAlign: 'center',
        fontStyle: 'strong',
    },
    //scientific name on wildlife page
    scientificName: {
        marginTop: 2,
        color: 'white',
        textAlign: 'center',
    },
    //fun fact for wildlife page
    funFact: {
        marginTop: 2,
        color: 'white',
        textAlign: 'center',
        width: 350,
    },

    //welcome screen background
    welcome: {
        flex: 1,
        backgroundColor: 'lightcyan',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
    },
    //code for the welcome button
    welcomeButton: {
        backgroundColor: 'lightskyblue',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth / 1.4,
        height: deviceHeight / 13,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'darkgreen',

    },
    //text in the welcome button
    welcomeText: {
        fontSize: deviceHeight / 25,
        color: 'darkgreen',
        textAlign: 'center',

    },
    //Text for the quote on the welcome screen
    quoteText: {
        fontSize: deviceHeight/39,
        color: '#0071A6',
        textAlign: 'center',
        marginBottom: deviceHeight / 25,
        marginLeft: deviceWidth / 18,
        marginRight: deviceWidth / 18,

    },
    //button in the Our Story widget
    generalButton: {
        borderRadius: 20,
        height: deviceHeight / 20,
        width: deviceWidth / 1.6,
        alignItems: 'center',
        backgroundColor: '#e0ffff',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: deviceWidth/55,
    },
    //button in the data widget
    graphButton: {
        /*borderRadius: 20,
        height: deviceHeight / 25,
        width: deviceWidth / 2,
        alignItems: 'center',
        backgroundColor: 'lightcyan',
        borderWidth: 2,
        borderColor: '#333333',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,*/
        borderRadius: 20,
        height: deviceHeight / 25,
        width: deviceWidth / 2,
        alignItems: 'center',
        //backgroundColor: '#275B5C',
        backgroundColor: '#F7B00C',
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: deviceWidth / 55,
    },
    //button in the weather widget
    weatherButton: {
        borderRadius: 20,
        height: deviceHeight / 25,
        width: deviceWidth / 2,
        alignItems: 'center',
        backgroundColor: 'lightsteelblue',
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    //button in the wildlife widget
    wildlifeButton: {
        borderRadius: 20,
        height: deviceHeight / 25,
        width: deviceWidth / 2,
        alignItems: 'center',
        backgroundColor: '#50A684',
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    //Template to copy/paste for text or just use as a placeholder
    mainButtonText: {
        color: '#263030',
        textAlign: 'center',
        fontSize: deviceHeight/50,
    },
    //used for OUR STORY
    //widget template to copy/paste or use as a placeholder
    BlueCoLabContainer: {
        width: deviceWidth/1.01,
        backgroundColor: '#214178',
        borderColor: '#787878',
        borderRadius: 20,
        //borderWidth: 2,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight/200,

    },
    BlogContainer: {
        width: deviceWidth/1.01,
        backgroundColor: '#3287B1',
        borderColor: '#787878',
        borderRadius: 20,
        //borderWidth: 2,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,

    },
    //images in the datahub page
    graphImage: {
        width: deviceWidth / 1.01,
        height: deviceHeight / 4,
        backgroundColor: '#0E2B58',
        borderColor: '#black',
        borderRadius: 20,
        borderWidth: 2,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
    },
    //data widget
    graphButtonContainer: {
        width: deviceWidth/1.01,
        backgroundColor: '#008280',
        borderColor: '#787878',
        borderRadius: 20,
        //borderWidth: 2,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
    },

    //data hub widget
    dataHubWidget: {
        width: deviceWidth/1.01,
        backgroundColor: '#008280',
        borderColor: '#787878',
        borderRadius: 20,
        //borderWidth: 2,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight/200,
    },
    //weather widget
    weatherButtonContainer: {
        width: deviceWidth / 1.01,
        backgroundColor: '#333333',
        borderColor: '#787878',
        borderRadius: 20,
        //borderWidth: 2,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
    },
    //wildlife screen widget
    animalButtonContainer: {
        width: deviceWidth / 1.01,
        backgroundColor: 'darkolivegreen',
        borderColor: '#787878',
        borderRadius: 20,
        //borderWidth: 2,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,

    },
    //button in the data widget
    dataButton: {
        borderRadius: 20,
        height: deviceHeight / 25,
        width: deviceWidth / 2,
        alignItems: 'center',
        backgroundColor: 'lightcyan',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    //text for the data button
    dataButtonText: {
        color: 'black',
    },
    //specific to OUR STORY widget paragraph text
    storyParagraphText: {
        color: 'white',
        fontSize: deviceHeight / 35,
        marginTop: deviceHeight / 100,
        marginBottom: deviceHeight / 20,
        marginLeft: deviceWidth / 15,
        marginRight: deviceWidth / 15,
        borderRadius: 20,
        textAlign: 'center',
    },
    //Text below the graph widget image
    homeParagraphText: {
        color: 'white',
        fontSize: deviceHeight/35,
        marginTop: deviceHeight/100,
        marginBottom: deviceHeight/15,
        marginLeft: deviceWidth/15,
        marginRight: deviceWidth/15,
        textAlign: 'center',
    },
    //used throughout app- also good copy/paste template
    paragraphText: {
        color: 'white',
        fontSize: deviceHeight / 35,
        marginTop: deviceHeight / 100,
        marginBottom: deviceHeight / 20,
        marginLeft: deviceWidth / 15,
        marginRight: deviceWidth / 15,
        textAlign: 'center',
    },

    //used in wildlife page
    pictureSub: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        margin: 5,
        marginLeft: deviceWidth / 15,
        marginRight: deviceWidth / 15,
    },
    //used in wildlife page
    pictureSubScientific: {
        color: 'white',
        fontSize: 16,
        margin: 5,
        textAlign: 'center',
        fontStyle: "italic"
    },
    //date text for the wildlife page
    dateText: {
        margin: 15,
        color: "white",
    },
    //general image styling for widgets
    imageContainer: {
        height: deviceHeight / 3,
        width: "90%",
        margin: deviceWidth / 30,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        marginLeft: deviceWidth / 19.5,
    },

    //AI PAGE STUFF

    camera: {
        height: deviceHeight,
        width: deviceWidth,
    },

    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',

    },
    //the big pink box for the information about the species scanned by the API
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,

    },
    title: {
        fontSize: 32,
    },
    sidewaystitle: {
        fontSize: 32,
        fontStyle: 'italic'
    },
    sideways: {
        fontStyle: 'italic'
    },

    thumbnail: {
        width: 200, // Adjust the width as needed
        height: 200, // Adjust the height as needed
        resizeMode: 'cover', // or 'contain' for different scaling options
    },
    //At the bottom of the camera screen, has the little camera images inside
    camButtonContainer: {
        height: deviceHeight / 5,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        opacity: .8,
        top: deviceHeight / 1.35,
    },
    //styling for the images themselves
    camImageContainer: {
        height: '65%',
        width: '85%',
        marginBottom: deviceWidth / 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: deviceHeight / 17,
    },
    //final screen in the AI section that shows information
    sampleContainer: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        alignItems: 'center',
        width: deviceWidth,
        height: 'auto',
    },
    //background for the information screen
    infoContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: deviceWidth,
        height: 'auto',
    },
    attributions: {
        margin: 16,
    },
    links: { color: 'blue', textDecorationLine: 'underline' },
    attributionsWidget: {
        width: deviceWidth / 1.01,
        backgroundColor: '#38639D',
        borderColor: '#787878',
        borderRadius: 20,
        //borderWidth: 1,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
    },

    //AIR QUALITY PAGE
    airQualityContainer: {
        flexGrow: 1,
        backgroundColor: '#2B2D35',
        alignItems: 'center',
        width: deviceWidth,
        padding: 10,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
    },
     loadingIndicator: {
        marginTop: 20,
    },
    //Header text for air quality
    airQualityHeader: {
        color: 'white',
        fontSize: deviceHeight / 20,
        textAlign: 'center',
        marginBottom: deviceHeight / 40,
        fontWeight: 'bold',
    },
    //Text for air quality readings
    airQualityText: {
        color: '#FFFFFF',
        fontSize: deviceHeight / 30,
        textAlign: 'center',
        marginTop: deviceHeight / 100,
        marginBottom: deviceHeight / 100,
        backgroundColor: '#4A6D7C',
        padding: 10,
        borderRadius: 10,
        width: deviceWidth / 1.2,
    },
    //Button for refreshing air quality data
    refreshButton: {
        backgroundColor: '#FF6347',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth / 2,
        height: deviceHeight / 15,
        borderRadius: 20,
        marginTop: deviceHeight / 30,
    },
    //Text inside the refresh button
    refreshButtonText: {
        color: 'white',
        fontSize: deviceHeight / 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    //Widget for displaying air quality information
    airQualityWidget: {
        width: deviceWidth / 1.01,
        backgroundColor: '#2B2D35',
        borderColor: '#787878',
        borderRadius: 20,
        marginTop: deviceHeight / 200,
        marginBottom: deviceHeight / 200,
        padding: 15,
    },
    //Chart container for visualizing air quality data
    airQualityChartContainer: {
        width: deviceWidth / 1.1,
        height: deviceHeight / 3,
        backgroundColor: '#2B2D35',
        borderRadius: 15,
        marginTop: deviceHeight / 50,
        marginBottom: deviceHeight / 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

     dropdownToggle: {
            backgroundColor: "#f0f0f0",
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
        },
        dropdownToggleText: {
            fontSize: 16,
            fontWeight: "500",
            color: "#333",
        },
        thresholdContainer: {
            marginVertical: 10,
        },
        inputRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15, // Add more space between rows
            color: "#fff",
            backgroundColor: "#46484f",

        },

        label: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#fff", // Adjust based on your theme
            marginRight: 10,
            width: 120, // Adjust width to align the labels
        },
        input: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15, // Add more space between rows
            color: "#fff",

        },


        airQualityInfo: {
            marginTop: 20,
        },

        submitButton: {
            backgroundColor: "#007BFF",
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            alignItems: "center",
        },
        submitButtonText: {
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: 16,
        },

        container: {
                marginVertical: 20,
                alignItems: "center",
                width: "80%",
                marginTop: -15,
            },
            textContainer: {
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 5,
            },
            aqiText: {
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
            },
            barBackground: {
                width: "100%",
                height: 20,
                backgroundColor: "#e0e0e0",
                borderRadius: 10,
                overflow: "hidden",
            },
            barFill: {
                height: "100%",
                borderRadius: 10,
            },
            aqiLabel: {
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
            },


});
