import { View, Text } from "react-native";
import { styles } from "../style";

export default function BrandScreen() {
    return(
        <View style={{backgroundColor: '#fff',flex: 1 }} >
            <Text style={styles.headText} >
            Welcome to Invment
            </Text>
            <View style={styles.container}>
                    <Text  >
                        Invment provides the ability to organize your filament and to know what kind of brand it is as well.
                    </Text>
            </View>
        </View>
    );
}