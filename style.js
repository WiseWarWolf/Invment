import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
  },
  headText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconSize: {
    top: 10,
    height: 35,
    width: 35,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 30,
    color: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'darkblue',
    paddingVertical: 15,
  },
  bodyText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  bodyRow: {
    height: 50,
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,

  },

});
