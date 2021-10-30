var firebaseConfig = {
      apiKey: "AIzaSyCsXcEWfm7JYz3gHKp1JH_QToGSm1owt8I",
      authDomain: "kwit-61912.firebaseapp.com",
      databaseURL: "https://kwit-61912-default-rtdb.firebaseio.com",
      projectId: "kwit-61912",
      storageBucket: "kwit-61912.appspot.com",
      messagingSenderId: "224350511743",
      appId: "1:224350511743:web:1822ea6c39664aacc2d54a"
    };    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logOut(){
      window.location="index.html";
}


function addRoom(){
      room_name=document.getElementById("room_name").value ;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}