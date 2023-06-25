import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
    messagesList: {
      flex: 1,
      marginBottom: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      margin: 8,
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
    input: {
      flex: 1,
      marginRight: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
    },
    messageContainer: {
      backgroundColor: '#f2f2f2',
      borderRadius: 8,
      padding: 8,
      margin: 8,
    },
    alignRight: {
        alignSelf: 'flex-end',
        backgroundColor: '#007bff',
    },
    alignLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#007bff',
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
  });