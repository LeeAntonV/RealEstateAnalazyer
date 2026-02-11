import { StyleSheet, View, Text, Pressable, Alert, Image, Linking } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    const [imageUri, setImageUri] = useState<string | null>(null);
    const insets = useSafeAreaInsets();

    const userName = "Anton Lee";
    const userTag = "antonlee";

    async function pickImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permission required", "Allow access to media files");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.9,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    }

    return (
        <View style={[styles.viewContainer, { paddingTop: insets.top + 12 }]}>
            <Pressable
                style={({ pressed }) => [
                    styles.pressContainer,
                    styles.pressPadding,
                    pressed && styles.pressedBg,
                ]}
                onPress={pickImage}
            >
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.imageContainer} />
                ) : (
                    <Text style={styles.textContainer}>+</Text>
                )}
            </Pressable>

            <View style={styles.rowContainer}>
                <Text style={styles.userNameText}>{userName}</Text>
                <Pressable style={({ pressed }) => [styles.editIcon, pressed && styles.pressedBg]}>
                    <Ionicons color="white" name="pencil" size={25} />
                </Pressable>
            </View>

            <View style={styles.tagRow}>
                <Text style={styles.tagText}>@</Text>
                <Text style={styles.userTagText}>{userTag}</Text>
                <Pressable style={({ pressed }) => [styles.iconButton, pressed && styles.pressedBg]}>
                    <Ionicons color="gray" name="copy" size={25} />
                </Pressable>
            </View>

            <View style={styles.menuCard}>
                <Pressable
                    style={({ pressed }) => [
                        styles.menuItem,
                        {marginTop: 30},
                        pressed && styles.pressedBg,
                    ]}
                >
                    <View style={[styles.menuRow, styles.menuUnderline]}>
                        <Text style={styles.menuText}>Add to Statistics</Text>
                    </View>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.menuItem,
                        pressed && styles.pressedBg,
                    ]}
                >
                    <View style={[styles.menuRow, styles.menuUnderline]}>
                        <Text style={styles.menuText}>Personal Statistics</Text>
                    </View>
                </Pressable>

                <Pressable style={(
                    { pressed }) =>
                    [
                        styles.menuItem,
                        {marginBottom: 30},
                        pressed && styles.pressedBg]
                }>
                    <View style={[styles.menuRow, styles.menuUnderline]}>
                        <Text style={styles.menuText}>Subscription</Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    If you have any questions about your data being processed, please check out our:
                </Text>
                <Text onPress={() => Linking.openURL("https://www.google.com/")} style={styles.footerLink}>
                    Privacy Policy
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },

    pressedBg: {
        backgroundColor: "#292828",
    },

    pressContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: "#374151",
        alignItems: "center",
        justifyContent: "center",
    },

    pressPadding: {
        paddingHorizontal: 5,
        paddingVertical: 5,
    },

    textContainer: {
        color: "white",
        fontSize: 40,
        fontWeight: "600",
        textAlign: "center",
    },

    userNameText: {
        color: "white",
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
    },

    imageContainer: {
        width: 146,
        height: 146,
        borderRadius: 73,
    },

    rowContainer: {
        marginTop: 16,
        width: 220,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },

    editIcon: {
        position: "absolute",
        right: 10,
        marginLeft: 10,
        borderRadius: 100,
    },

    tagRow: {
        marginTop: 6,
        flexDirection: "row",
        alignItems: "center",
    },

    tagText: {
        color: "white",
        fontSize: 15,
    },

    userTagText: {
        color: "white",
        fontSize: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
    },

    iconButton: {
        position: "absolute",
        right: -30,
        borderRadius: 12,
    },

    menuCard: {
        marginTop: 80,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "white",
        borderRadius: 20,
        width: "95%",
        overflow: "hidden",
    },

    menuItem: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },

    menuRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    menuUnderline: {
        borderBottomWidth: 0.5,
        borderBottomColor: "white",
        paddingBottom: 12,
    },

    menuText: {
        color: "white",
        fontSize: 20,
    },

    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30,
        paddingHorizontal: 16,
    },

    footerText: {
        color: "gray",
        fontSize: 10,
        textAlign: "center",
    },

    footerLink: {
        marginTop: 6,
        color: "gray",
        fontSize: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
    },
});
