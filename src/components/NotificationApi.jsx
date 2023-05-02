import React, { useEffect } from "react";

// import { GrNotification } from "react-icons/gr";

// import NotificationIcon from "../../files/icons/outgoing_call.png";
const NotificationApi = () => {
  useEffect(() => {
    // requesting permission from user
    Notification.requestPermission(() => {
      if (Notification.permission === "granted") {
        console.log("Approved");
      } else if (Notification.permission === "denied") {
        console.log("denied");
      } else {
        console.log("user hasn't decided yet");
      }
    });
  });

  function handleSendNotification() {
    if (Notification.permission === "granted") {
      let notification = new Notification("Hello", {
        body: "I love you meraj!",
        icon: NotificationIcon,
      });

      // setTimeout(() => {
      //   // close notification after 1 sec
      //   notification.close();
      // }, 10000);

      // ? this event is not working in all browsers
      notification.addEventListener("close", () => {
        console.log("user closed the notification");
      });

      // handling click event on the body of notification
      notification.onclick = function (event) {
        console.log("notification event object", event);
      };
      notification.onerror = function (event) {
        console.log("There was an error", event);
      };
    } else if (Notification.permission === "denied") {
      console.log("permission denied");
      // ? we can not sent another notification permission after user denied it
      //   window.location.href = "chrome://settings/content/notifications";
    } else {
      console.log("user hasn't decided yet");
    }
  }
  return (
    <div className="notif-cont">
      <h2>Notification Api</h2>
      <button onClick={handleSendNotification}>Send Simple Notification</button>
    </div>
  );
};

export default NotificationApi;
