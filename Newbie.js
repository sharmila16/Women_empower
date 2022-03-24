//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://github.com/Automattic/social-logos/blob/trunk/sources/svg/ghost.svg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
Basic Information</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonGPlusStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://github.com/Automattic/social-logos/blob/trunk/sources/svg/ghost.svg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                        Spending Tracker
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://github.com/Automattic/social-logos/blob/trunk/sources/svg/ghost.svg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                        Goals
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonGPlusStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://github.com/Automattic/social-logos/blob/trunk/sources/svg/ghost.svg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                        Insurance
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://github.com/Automattic/social-logos/blob/trunk/sources/svg/ghost.svg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                        Investments
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonGPlusStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://github.com/Automattic/social-logos/blob/trunk/sources/svg/ghost.svg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                       Tax Planning
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://github.com/Automattic/social-logos/blob/trunk/sources/svg/ghost.svg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                   Loans
                   </Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAA520',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF1493',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});

export default App;
