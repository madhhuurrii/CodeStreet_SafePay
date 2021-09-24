const firebaseConfig = {
    apiKey: "AIzaSyCUHEsl8ORR4dmUfI5K8xS1AlpDy1MycwI",
    authDomain: "eazbud-45df4.firebaseapp.com",
    projectId: "eazbud-45df4",
    storageBucket: "eazbud-45df4.appspot.com",
    messagingSenderId: "1076640646800",
    appId: "1:1076640646800:web:31f28003003c7640d17a15",
    measurementId: "G-TN3BM91YM2"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

document.getElementById('loginForm').addEventListener("submit", (event)=>{
event.preventDefault();
})

// firebase.auth().onAuthStateChnged((user)=>{
// if(user){
// location.replace("index.html")
// }
// })

function login(){
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
firebase.auth().signInUserWithEmailandPassword(email,password)
.catch((error) =>{
document.getElementById("error-message").innerHTML = error.message
});
}
