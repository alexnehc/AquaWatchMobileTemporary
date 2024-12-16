import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    RefreshControl,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import styles from "../../styles";
import * as Location from "expo-location";
import RNPickerSelect from "react-native-picker-select";

// AQIBar Component
const AQIBar = ({ aqiGrade }) => {
    const getBarStyle = (grade) => {
        let widthPercentage = "0%";
        let backgroundColor = "green";

        if (grade === 1) {
            widthPercentage = "20%";
            backgroundColor = "#00E400";
        } else if (grade === 2) {
            widthPercentage = "35%";
            backgroundColor = "#FFFF00";
        } else if (grade === 3) {
            widthPercentage = "50%";
            backgroundColor = "#FF7E00";
        } else if (grade === 4) {
            widthPercentage = "70%";
            backgroundColor = "#FF0000";
        } else if (grade === 5) {
            widthPercentage = "100%";
            backgroundColor = "#99004C";
        }

        return { width: widthPercentage, backgroundColor };
    };

    const getAQILabel = (aqi) => {
        switch (aqi) {
            case 1: return "Good";
            case 2: return "Moderate";
            case 3: return "Unhealthy for Sensitive Groups";
            case 4: return "Unhealthy";
            case 5: return "Very Unhealthy";
            default: return "Hazardous";
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.aqiText}>AQI: {aqiGrade}</Text>
                <Text style={styles.aqiLabel}>{getAQILabel(aqiGrade)}</Text>
            </View>
            <View style={styles.barBackground}>
                <View style={[styles.barFill, getBarStyle(aqiGrade)]} />
            </View>
        </View>
    );
};



// Function to get air quality data
const getAirQuality = async (latitude, longitude) => {
    const apiKey = "4fd184c24fcacbb3bdf4ffcfb79ed8b9";
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching air quality data:", error);
    }
};

// Function to get coordinates of a city
const getCoordinatesFromCity = async (city) => {
    const apiKey2 = '4925f2810962e0647c896b2cffd6edf3'; // Your PositionStack API key
    const url = `https://api.positionstack.com/v1/forward?access_key=${apiKey2}&query=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
            const { latitude, longitude } = data.data[0];
            return { latitude, longitude };
        } else {
            Alert.alert("City Not Found", "Please enter a valid city name.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        Alert.alert("Error", "Could not fetch coordinates. Please try again.");
        return null;
    }
};

const AirQuality = () => {
    const [airQualityData, setAirQualityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedOption, setSelectedOption] = useState('currentLocation');
    const [location, setLocation] = useState({
        latitude: 41.12838,
        longitude: -73.808189,
    });
    const [title, setTitle] = useState("Air Quality Data");
    const [searchQuery, setSearchQuery] = useState("");


    const [thresholdsVisible, setThresholdsVisible] = useState(false);

    const [thresholds, setThresholds] = useState({
        aqi: 3,
        co: 500,
        no: 50,
        no2: 100,
        o3: 120,
        pm2_5: 35,
        pm10: 50,
        so2: 75,
    });


    useEffect(() => {
        fetchAirQualityData();
    }, [location]);

    useEffect(() => {
        registerForPushNotifications();
        fetchAirQualityData();
    }, []);

    const registerForPushNotifications = async () => {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (status !== "granted") {
            Alert.alert("Permission denied", "Enable notifications in settings.");
            return;
        }
    };


    const fetchAirQualityData = async () => {
        setLoading(true); // Show loading indicator
        setRefreshing(true);
        try {
            const data = await getAirQuality(location.latitude, location.longitude);
            if (data) {
                setAirQualityData(data);
                checkThresholds(data.list[0].main, data.list[0].components);
            }
        } catch (error) {
            console.error("Error fetching air quality data:", error);
        } finally {
            setRefreshing(false);
            setLoading(false); // Hide loading indicator
        }
    };

    const checkThresholds = async (main, components) => {
        const exceededComponents = [];

        if (main.aqi > thresholds.aqi) exceededComponents.push(`AQI: ${main.aqi}`);
        if (components.co > thresholds.co) exceededComponents.push(`CO: ${components.co}`);
        if (components.no > thresholds.no) exceededComponents.push(`NO: ${components.no}`);
        if (components.no2 > thresholds.no2) exceededComponents.push(`NO2: ${components.no2}`);
        if (components.o3 > thresholds.o3) exceededComponents.push(`O3: ${components.o3}`);
        if (components.pm2_5 > thresholds.pm2_5) exceededComponents.push(`PM2.5: ${components.pm2_5}`);
        if (components.pm10 > thresholds.pm10) exceededComponents.push(`PM10: ${components.pm10}`);
        if (components.so2 > thresholds.so2) exceededComponents.push(`SO2: ${components.so2}`);

        if (exceededComponents.length > 0) {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Air Quality Alert 🚨",
                    body: `The following components exceeded their thresholds: ${exceededComponents.join(", ")}`,
                },
                trigger: null,
            });
        }
    };

    const onRefresh = () => {
        fetchAirQualityData();
    };

    const handleSetThreshold = (component, value) => {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            setThresholds((prevThresholds) => ({
                ...prevThresholds,
                [component]: numericValue,
            }));
        }
    };


    const useCurrentLocation = async () => {
        setLoading(true);

        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setLoading(false);
            Alert.alert("Permission denied", "Location permission is required to fetch your current location.");
            console.log('Permission to access location was denied');
            return;
        }

        try {
            let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
            const { latitude, longitude } = location.coords;
            setLocation({ latitude, longitude });
            setTitle("Current Location AQI Data");  // Change title when location is fetched
            fetchAirQualityData();  // Trigger fetching air quality data
        } catch (error) {
            Alert.alert("Error", "Could not fetch location. Please try again.");
            console.error("Error getting location:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleDropdownChange = (value) => {
        setSelectedOption(value);

        if (value === 'currentLocation') {
            setTitle("Current Location AQI Data");
            useCurrentLocation();  // Use current location
        } else if (value === 'paceUniversity') {
            setTitle("Pace University AQI Data");
            setLocation({ latitude: 41.128380, longitude: -73.808189 });
        } else if (value === 'paceUniversityNYC') {
            setTitle("Pace University NYC Campus AQI Data");
            setLocation({ latitude: 40.711220, longitude: -74.006477 });
        }
    };

    const handleSearch = async () => {
        const coordinates = await getCoordinatesFromCity(searchQuery);
        if (coordinates) {
            setLocation(coordinates);
            setTitle(`Air Quality Data for ${searchQuery}`);
        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.airQualityContainer}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={fetchAirQualityData}
                />
            }
        >

             {/* Display dynamic title */}
             <Text style={styles.currentLocationTitle}>{title}</Text>

             {/* Thresholds Dropdown */}
            <TouchableOpacity
                onPress={() => setThresholdsVisible(!thresholdsVisible)}
                style={styles.dropdownToggle}
            >
                <Text style={styles.dropdownToggleText}>
                    {thresholdsVisible ? "Hide Thresholds" : "Show Thresholds"}
                </Text>
            </TouchableOpacity>

            {thresholdsVisible && (
                <View style={styles.thresholdContainer}>
                    {Object.entries(thresholds).map(([component, value]) => (
                        <View key={component} style={styles.inputRow}>
                            {/* Label in front of the input */}
                            <Text style={styles.label}>{component.toUpperCase()} Threshold:</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                value={value.toString()}
                                onChangeText={(text) => handleSetThreshold(component, text)}
                            />
                        </View>
                    ))}

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => Alert.alert("Thresholds Updated", "Your thresholds have been updated successfully!")}
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Search Bar */}
            <TextInput
                style={styles.input}
                placeholder="Search for a location..."
                placeholderTextColor="#ccc"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
            />

            {/* Dropdown menu for selecting the location option */}
            <RNPickerSelect
                onValueChange={handleDropdownChange}
                items={[
                    { label: 'Use Your Current Location', value: 'currentLocation' },
                    { label: 'Get Air Quality at Pace University', value: 'paceUniversity' },
                    { label: 'Get Air Quality at Pace University NYC Campus', value: 'paceUniversityNYC' },
                ]}
                style={{
                    inputAndroid: {
                        color: 'white', // Text color for Android
                        backgroundColor: '#46484f',
                        margin: 10,
                        marginBottom: 50,
                    },
                    inputIOS: {
                        color: 'white', // Text color for iOS
                        backgroundColor: '#46484f',
                        margin: 10,
                        marginBottom: 50,
                    },
                    placeholder: {
                        color: 'white', // Placeholder color
                        backgroundColor: '#46484f',
                        margin: 10,
                        marginBottom: 50,
                    },
                }}
                placeholder={{ label: 'Select an option...', value: null }}
            />


            {/* AQI Bar below dropdown */}
            {airQualityData && (
                <AQIBar aqiGrade={airQualityData.list[0].main.aqi} />
            )}

            {/* Display AQI data */}
            {airQualityData ? (
                <View style={styles.airQualityInfo}>
                    <Text style={styles.airQualityText}>
                        CO: {airQualityData.list[0].components.co} µg/m³
                    </Text>
                    <Text style={styles.airQualityText}>
                        NO2: {airQualityData.list[0].components.no2} µg/m³
                    </Text>
                    <Text style={styles.airQualityText}>
                        PM2.5: {airQualityData.list[0].components.pm2_5} µg/m³
                    </Text>
                </View>
            ) : (
                <Text style={styles.loadingText}>Loading air quality data...</Text>
            )}

            {loading && (
                <ActivityIndicator
                    size="large"
                    color="#007BFF"
                    style={styles.loadingIndicator}
                />
            )}
        </ScrollView>
    );
};



export default AirQuality;



