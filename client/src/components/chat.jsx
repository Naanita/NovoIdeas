import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addMessageToChat } from "../redux/chatSlice";

import "../styles/chat.css";

const Chat = () => {
  const { user, password } =
    useSelector((state) => state.auth && state.auth) || {};
  const [inputValue, setInputValue] = useState("");
  const [customerHasSpoken, setCustomerHasSpoken] = useState(false);
  const dispatch = useDispatch();
  const conversation = useSelector((state) => state.chat.messages);
  const [apiResponses, setApiResponses] = useState({});

  useEffect(() => {
    const fetchConversation = async () => {
      const response = await axios.get(
        "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing",
        {
          params: {
            user: user,
            password: password,
          },
        }
      );
      const messages = response.data.filter(
        (message) => message.sender === "agent" || message.sender === "customer"
      );
      const responses = {};
      for (let i = 1; i < messages.length; i += 2) {
        responses[messages[i - 1].message] = messages[i].message;
      }
      setApiResponses(responses);
    };

    fetchConversation();
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const newMessage = { sender: "customer", message: inputValue };
    dispatch(addMessageToChat(newMessage));
    setInputValue("");
    setCustomerHasSpoken(true);
    if (apiResponses[inputValue]) {
      dispatch(
        addMessageToChat({ sender: "agent", message: apiResponses[inputValue] })
      );
    }
  };

  return (
    <div className="chat">
      {conversation.map((message, index) => {
        if (message.sender !== "customer" && message.sender !== "agent") {
          return null;
        }
        return (
          <div
            key={index}
            className={`message ${
              message.sender === "customer" ? "client" : "agent"
            }`}
          >
            {message.message}
          </div>
        );
      })}
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">📩</button>
      </form>
    </div>
  );
};

export default Chat;
