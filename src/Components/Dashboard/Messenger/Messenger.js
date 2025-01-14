import React, { useState, useEffect } from "react";
import styles from "./Messenger.module.scss";
import ChatList from "./ChatList/ChatList";
import ChatScreen from "./ChatScreen/ChatScreen";
// import { contacts } from "../../../Utils/contacts";
import { database } from "../../../firebase/firebase";
const Messenger = props => {
  // const [chatList, setChatList] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [contactsList, setContactsList] = useState(null);
  /* update the contactslist whenever the currentChat changes */
  // useEffect(() => {
  //   if (currentChat) {
  //     setContactsList({
  //       ...contactsList,
  //       [currentChat.userId]: { ...currentChat }
  //     });
  //   }
  // }, [currentChat]);
  //fetch the users data
  useEffect(() => {
    database
      .collection("users")
      .get()
      .then(function(querySnapshot) {
        const tempContactsList = [];
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          tempContactsList.push(doc.data());
        });
        setContactsList(tempContactsList);
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div className={styles.messenger}>
      <ChatList
        contactsList={contactsList}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
      />
      <ChatScreen
        currentChat={currentChat}
        contactsList={contactsList}
        setCurrentChat={setCurrentChat}
        setContactsList={setContactsList}
      />
    </div>
  );
};

export default Messenger;
