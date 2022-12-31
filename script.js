 // REPLACE WITH YOUR web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyC7eDURir6hd8yzM1xljuPkXAbZkEPTc5U",
authDomain: "ijdid-ya-rabe7.firebaseapp.com",
databaseURL: "https://ijdid-ya-rabe7-default-rtdb.firebaseio.com",
projectId: "ijdid-ya-rabe7",
storageBucket: "ijdid-ya-rabe7.appspot.com",
messagingSenderId: "307672402167",
appId: "1:307672402167:web:64afb55794ffbc76842bf2",
measurementId: "G-R9PCGRY754"
  };

  // Initialize firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database().ref("Sensor/data").on("value", (sanpshot) => {
      console.log(sanpshot.val());
      document.getElementById("temp").innerHTML = sanpshot.val();
    });
  



  $(document).ready(function(){
      var database = firebase.database();
    var Led1Status;
  
    database.ref().on("value", function(snap){
      Led1Status = snap.val().Led1Status;
      if(Led1Status == "1"){    // check from the firebase
        //$(".Light1Status").text("The light is off");
        document.getElementById("unact").style.display = "none";
        document.getElementById("act").style.display = "block";
      } else {
        //$(".Light1Status").text("The light is on");
        document.getElementById("unact").style.display = "block";
        document.getElementById("act").style.display = "none";
      }
    });
  
      $(".toggle-btn").click(function(){
      var firebaseRef = firebase.database().ref().child("Led1Status");
  
      if(Led1Status == "1"){    // post to firebase
        firebaseRef.set("0");
        Led1Status = "0";
      } else {
        firebaseRef.set("1");
        Led1Status = "1";
      }
    })
  });