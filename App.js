import React, { useState, useEffect } from 'react';
import { View,Text,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';
import Modal from 'react-native-modal';

const contactsData = [
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
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>
      <Text style={styles.contactIcon}>📞</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Contacts</Text>
      </View>
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
    backgroundColor: 'lightblue',
    paddingTop: 20,
    paddingHorizontal: 15,
  },header: {
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  contactItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    elevation: 2,
  },
  contactInfo: {
    flex: 1,
    marginRight: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  contactNumber: {
    fontSize: 16,
    color: '#888',
  },
  contactIcon: {
    fontSize: 20,
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
    color: '#333',
  },
  modalContent: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
