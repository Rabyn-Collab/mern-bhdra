import AllProduct from "../product/AllProduct.jsx";
import Top5Products from "../product/Top5Products.jsx";
import OneSignal from 'react-onesignal';
import { useEffect } from "react";

export default function Home() {

  //

  useEffect(() => {
    // Ensure this code runs only on the client side

    OneSignal.init({
      appId: 'f80e64cd-40ad-495b-a0a0-e94b0d4fcba7',
      // You can add other initialization options here
      notifyButton: {
        enable: true,
      },
      welcomeNotification: {
        title: "Welcome to My App",
        message: "Thank you for using our app!",
      },

    });

  }, []);



  return (
    <div>
      <Top5Products />
      <AllProduct />

    </div>
  )
}
