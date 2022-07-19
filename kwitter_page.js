var firebaseConfig = {
      apiKey: "AIzaSyDQvLGjmVK4kwZh6cvnA4PB3ZQR9sEnIlM",
      authDomain: "kwitter-ffec4.firebaseapp.com",
      databaseURL: "https://kwitter-ffec4-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffec4",
      storageBucket: "kwitter-ffec4.appspot.com",
      messagingSenderId: "1094833988845",
      appId: "1:1094833988845:web:dac7903c70e606164e18e4"
    };
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function  send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
    }