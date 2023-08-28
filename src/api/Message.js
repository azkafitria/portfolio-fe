import axios from "axios";
import toast from 'react-hot-toast';
import { beURL } from "../constants/constants";

export const sendMessage = async ({ nameMessage, emailMessage, phoneMessage, message }) => {
  const body = {
    name: nameMessage,
    email: emailMessage,
    phone: phoneMessage,
    message: message
  }
    axios.post(`${beURL}/message/send`, {
      name: nameMessage,
      email: emailMessage,
      phone: phoneMessage,
      message: message
    }).then(() => {
      toast.success("Message sent!")
    }).catch(function (error) {
      toast.error("Error")
      })
  };