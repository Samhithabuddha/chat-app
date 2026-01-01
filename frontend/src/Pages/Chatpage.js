import React, { useEffect, useState } from "react";
import axios from 'axios';

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  // Fetch chats from the API
  const fetchChats = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/chat");
      setChats(response.data); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  // Call fetchChats when the component mounts
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.length === 0 ? (
        <p>No chats available</p> // If no chats are available, show this message
      ) : (
        chats.map((chat) => (
          <div key={chat._id}> {/* Use a unique identifier like _id for the key */}
            <h2>{chat.chatName}</h2> {/* Replace chatName with actual property */}
            <p>{chat.message}</p> {/* Replace message with actual property */}
          </div>
        ))
      )}
    </div>
  );
};

export default Chatpage;
