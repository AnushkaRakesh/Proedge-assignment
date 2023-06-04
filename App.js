// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
// import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

// const SlideAnimationDialog = new SlideAnimation({
//   slideFrom: 'bottom',
// });

// // Static data representing the contacts
// const contactsData = [
//   { name: 'Anushka Rakesh', number:'7006547326'},
//   { name: 'Jane Smith', number: '0987654321' },
//   { name: 'Arjun Gupta', number: '9876543210' },
//   { name: 'Alex Johnson', number: '0123456789' },
//   { name: 'Vansh Nimbark', number:'09837246774'},
//   { name: 'John Doe', number: '1234567890' },
//   { name: 'Vanshika Rakesh', number:'6428892374'},
//   { name: 'Albert Einstein', number: '7896535345'}
// ];

// // const App = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedContact, setSelectedContact] = useState(null);

// //   // Filter contacts based on search term
// //   const filteredContacts = contactsData.filter((contact) =>
// //     contact.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // Function to display contact details in a popup
// //   const displayContactDetails = (contact) => {
// //     setSelectedContact(contact);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         style={styles.searchBox}
// //         placeholder="Search contacts"
// //         onChangeText={(text) => setSearchTerm(text)}
// //         value={searchTerm}
// //       />

// //       {filteredContacts.map((contact, index) => (
// //         <TouchableOpacity
// //           key={index}
// //           style={styles.contactItem}
// //           onPress={() => displayContactDetails(contact)}
// //         >
// //           <Text>{contact.name}</Text>
// //           <Text>{contact.number}</Text>
// //         </TouchableOpacity>
// //       ))}

// //       <Modal
// //         visible={selectedContact !== null}
// //         transparent
// //         animationType="fade"
// //         onRequestClose={() => setSelectedContact(null)}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <Text style={styles.contactName}>{selectedContact?.name}</Text>
// //             <Text style={styles.contactNumber}>{selectedContact?.number}</Text>
// //             <TouchableOpacity
// //               style={styles.dismissButton}
// //               onPress={() => setSelectedContact(null)}
// //             >
// //               <Text style={styles.dismissButtonText}>Dismiss</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: '#fff',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //     },
// //   searchBox: {
// //     height: 40,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     marginBottom: 16,
// //     padding: 8,
// //   },
// //   contactItem: {
// //     marginBottom: 8,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     backgroundColor: '#fff',
// //     padding: 16,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   contactName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //   },
// //   contactNumber: {
// //     fontSize: 16,
// //     marginBottom: 16,
// //   },
// //   dismissButton: {
// //     backgroundColor: '#ccc',
// //     padding: 8,
// //     borderRadius: 4,
// //   },
// //   dismissButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// // });

// // export default App;

// const HomeScreen = () => {
//   const [contacts, setContacts] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     setContacts(contactsData);
//   }, []);

//   const handleContactPress = (contact) => {
//     this.popupDialog.show();
//     this.popupDialog.dialogTitle(
//       <Text style={styles.dialogTitle}>{contact.name}</Text>
//     );
//     this.popupDialog.dialogContent(
//       <Text style={styles.dialogContent}>{contact.number}</Text>
//     );
//   };

//   const renderContactItem = ({ item }) => (
//     <TouchableOpacity onPress={() => handleContactPress(item)}>
//       <View style={styles.contactItem}>
//         <Text style={styles.contactName}>{item.name}</Text>
//         <Text style={styles.contactNumber}>{item.number}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search..."
//         onChangeText={(text) => setSearchText(text)}
//         value={searchText}
//       />
//       <FlatList
//         data={filteredContacts}
//         renderItem={renderContactItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <PopupDialog
//         ref={(popupDialog) => {
//           this.popupDialog = popupDialog;
//         }}
//         dialogAnimation={SlideAnimationDialog}
//         dialogStyle={styles.dialogContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   searchInput: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   contactItem: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   contactName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   contactNumber: {
//     fontSize: 16,
//     color: '#888',
//   },
//   dialogContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//   },
//   dialogTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   dialogContent: {
//     fontSize: 18,
//   },
// });

// export default HomeScreen;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

const contactsData = [
  // { id: '1', name: 'John Doe', number: '1234567890' },
  // { id: '2', name: 'Jane Smith', number: '0987654321' },
  // { id: '3', name: 'Arjun Gupta', number: '9876543210' },
  // { id: '4', name: 'David Johnson', number: '4567890123' },
  {id:'1',name: 'Anushka Rakesh', number:'7006547326'},
  {id:'2', name: 'Jane Smith', number: '0987654321' },
  { id:'3',name: 'Arjun Gupta', number: '9876543210' },
  {id:'4', name: 'Alex Johnson', number: '0123456789' },
  { id:'5',name: 'Vansh Nimbark', number:'09837246774'},
  { id:'6',name: 'John Doe', number: '1234567890' },
  { id:'7',name: 'Vanshika Rakesh', number:'6428892374'},
  { id:'8',name: 'Albert Einstein', number: '7896535345'}
];


const HomeScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
    setModalVisible(true);
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactPress(item)}>
      <View style={styles.contactItem}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={filteredContacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedContact?.name}</Text>
          <Text style={styles.modalContent}>{selectedContact?.number}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  contactItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactNumber: {
    fontSize: 16,
    color: '#888',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 18,
  },
});

export default HomeScreen;
