import { StyleSheet, Dimensions } from 'react-native'
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  headerView: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    marginBottom: 50,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
  },
  card: {
    padding: 20,
    flex: 1,
    margin: 16,
    backgroundColor: 'blanchedalmond',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardDesc: {
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardImage: {
    aspectRatio: 16 / 9,
  },
  errorView: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 24,
    padding: 12,
    fontWeight: 'bold',
  },
  errorSubText: {
    textAlign: 'center',
    fontSize: 16,
  },
})
