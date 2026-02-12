// Ambil data dari Firestore (Firebase)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Dari Firebase Console
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef1234567890"
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// Ambil data dari Firestore
db.collection("branding").doc("main").get()
  .then(doc => {
    if (doc.exists) {
      const data = doc.data();
      document.getElementById("name").textContent = data.name || "SANTUSH DEB";
      document.getElementById("title").textContent = data.title || "Creative Designer & Developer";
      document.getElementById("description").textContent = data.description || "I help brands grow with impactful digital experiences.";
      document.getElementById("profileImg").src = data.profileImage || "https://via.placeholder.com/200";
    } else {
      console.log("No such document!");
    }
  })
  .catch(err => {
    console.error("Error fetching data:", err);
    // Tampilkan data default
    document.getElementById("name").textContent = "SANTUSH DEB";
    document.getElementById("title").textContent = "Creative Designer & Developer";
    document.getElementById("description").textContent = "I help brands grow with impactful digital experiences.";
    document.getElementById("profileImg").src = "https://via.placeholder.com/200";
  });