// // importScripts(
// //   "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
// // );
// // importScripts(
// //   "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
// // );
// // importScripts(
// //   "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js"
// // );
// // import { initializeApp } from "Firebase/app";
// // import { getMessaging, getToken } from "firebase/messaging";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyBwG7HAROHZaWXYzjzIG-JNdNEqPzedKMA",
// //   authDomain: "cleandeskai.firebaseapp.com",
// //   projectId: "cleandeskai",
// //   storageBucket: "cleandeskai.appspot.com",
// //   messagingSenderId: "937690079602",
// //   appId: "1:937690079602:web:5f2337042e05a8cf653deb",
// //   measurementId: "G-E8B856ZZTV",
// //   // apiKey: "AIzaSyDFevIcicvGUr1iPUf49HW-qdQ_dS_p6B8",
// //   // authDomain: "login-auth-95b70.firebaseapp.com",
// //   // databaseURL: "https://login-auth-95b70-default-rtdb.firebaseio.com",
// //   // projectId: "login-auth-95b70",
// //   // storageBucket: "login-auth-95b70.appspot.com",
// //   // messagingSenderId: "767792296685",
// //   // appId: "1:767792296685:web:4ae0f6cec120bb78aed2e4",
// //   // measurementId: "G-QZR838WYYY",
// // };

// // const serviceWorkerRegistration = navigator.serviceWorker.register(
// //   "/widget-testing/firebase-messaging-sw.js"
// // );

// importScripts(
//   'https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js',
// );
// importScripts(
//   'https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js',
// );

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey: "AIzaSyBwG7HAROHZaWXYzjzIG-JNdNEqPzedKMA",
//   authDomain: "cleandeskai.firebaseapp.com",
//   projectId: "cleandeskai",
//   storageBucket: "cleandeskai.appspot.com",
//   messagingSenderId: "937690079602",
//   appId: "1:937690079602:web:5f2337042e05a8cf653deb",
//   measurementId: "G-E8B856ZZTV",
// });

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   // Customize notification here
//   const notificationTitle = 'CleanDesk';
//   const notificationOptions = {
//     body: 'Notification from CleanDesk.',
//     icon: '/favicon-96x96.png',
//   };

//   // eslint-disable-next-line no-restricted-globals
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });


// // function requestPermission() {
// //   console.log("Requesting permission...");
// //   Notification.requestPermission().then((permission) => {
// //     if (permission === "granted") {
// //       console.log("Notification permission granted.");
// //       const app = initializeApp(firebaseConfig);

// //       const messaging = firebase.messaging();
// //       getToken(messaging, {
// //         vapidKey:
// //           // "BNIJU5asOcHqwqzU5cBdoWn5wo_hLe21SfTX_G0dIy-5-17-j059LwzId-KhV9KU6RtoE4to9P-vuWadJ4erdKg",
// //           "BOWdlEHTiTXNl4ncjBd3URkD5cPtkoSDpLKmq1kTzmTFhU6zHo0gk22jti9_agP4IPGl49m3nNb5dIk1AezACZk",
// //         // serviceWorkerRegistration,
// //       }).then((currentToken) => {
// //         if (currentToken) {
// //           console.log("currentToken: ", currentToken);
// //         } else {
// //           console.log("Can not get token");
// //         }
// //       });
// //     } else {
// //       console.log("Do not have permission!");
// //     }
// //   });
// // }

// // requestPermission();
