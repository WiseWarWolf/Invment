import { View, Text } from "react-native";
import { styles } from "../style";

export default function HomeScreen() {
    return(
        <View style={{backgroundColor: '#fff',flex: 1 }} >
            <Text style={[styles.headText, {paddingTop: 10}]} >
                Welcome to Invment
            </Text>
            <View style={styles.container}>
                    <Text style={{width: '75%', textAlign: 'center'}} >
                        Invment provides the ability to organize your filament and to know what kind of brand it is as well.
                    </Text>
            </View>
        </View>
    );
}