import { View, Text, FlatList } from "react-native";
import { styles } from "../style";
import { fillamentTemplate } from "../data/filamentTemplate";

export default function App() {



  const renderItem = ({ item }) => (
    <View style={styles.bodyRow}>
            <Text style={[styles.bodyText,{textAlign: 'left'}]}>{item.type} - {item.color}</Text>
            <Text style={[styles.bodyText,{textAlign: 'left', paddingLeft: 50}]}>{item.brand}</Text>
            <Text style={[styles.bodyText,{textAlign: 'right'}]}>{item.temp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.headerRow}>
            <Text style={[styles.headerText,{textAlign: 'left'}]}>Type-Color</Text>
            <Text style={[styles.headerText,{textAlign: 'center'}]}>Brand</Text>
            <Text style={[styles.headerText,{textAlign: 'right'}]}>Temp</Text>
        </View>
        <FlatList
            data={fillamentTemplate}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    </View>
  );
}

