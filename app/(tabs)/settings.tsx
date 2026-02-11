import {StyleSheet, View, Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Colors} from "@/constants/theme";


export default function Settings() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.viewContainer]}>
            <View style={[{marginBottom: insets.bottom + 10}]}>
                <Text style={[styles.textContainer, {fontSize: 30}, {borderBottomWidth: 0}]}>
                    Settings
                </Text>
            </View>
            <View style={[styles.menuSettings]}>
                <View style={[styles.menuItemContainer, {marginTop: 40}]}>
                    <Text style={styles.textItemContainer}>
                        Theme
                    </Text>
                    <Text style={[styles.textItemContainer, {color:"gray"}]}>
                        Dark
                    </Text>
                </View>
                <View style={styles.menuItemContainer}>
                    <Text style={styles.textItemContainer}>
                        Notifications
                    </Text>
                </View>
                <View style={styles.menuItemContainer}>
                        <Text style={styles.textItemContainer}>
                            Device Log
                        </Text>
                </View>
                <View style={[styles.menuItemContainer, {marginBottom: 40}]}>
                    <Text style={styles.textItemContainer}>
                        Visibility
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },

    textContainer: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 12,
    },

    textItemContainer: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 12,
        fontSize: 20,
    },

    pressContainer: {
    },

    menuSettings: {
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: "white",
        width: "95%",
        position: "relative",
        justifyContent: "center",
        marginHorizontal: 10,
    },

    menuItemContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 20,
    }
});
