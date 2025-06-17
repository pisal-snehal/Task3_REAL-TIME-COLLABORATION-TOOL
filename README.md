
# Task 3 - Real-Time Collaborative Notes Application

## 🏢 Company Details
- **Company**: CODTECH IT SOLUTIONS  
- **Intern Name**: Snehal Pisal  
- **Intern ID**: CT04DN1381  
- **Domain**: Software Development  
- **Duration**: 4 Weeks  
- **Mentor**: Neela Santosh  

---

## 📌 Project Overview

This task involved developing a **real-time collaborative tool** for **note-taking or coding**, similar to Google Docs, using **WebSocket technology via Socket.IO**. Multiple users can join the same room and collaboratively edit notes, with all changes reflected live across connected users.

---

## 💡 Technologies Used

- Node.js  
- Express.js  
- Socket.IO  
- HTML5, CSS3, JavaScript

---

## 📁 Project Structure

```
📂 collaborative-notes/
├── server.js            # Main server file (Express + WebSocket)
├── public/
│   ├── index.html       # Frontend UI
│   ├── style.css        # Styling
│   └── script.js        # Client-side Socket.IO logic
├── package.json         # Project dependencies
```

---

## ⚙️ How to Run Locally

1. Clone or download the project folder  
2. Navigate to the project directory:
   ```
   cd collaborative-notes
   ```
3. Install dependencies:
   ```
   npm install express socket.io
   ```
4. Start the server:
   ```
   node server.js
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 🧠 Features

- 📝 Real-time collaborative text editing
- 📡 WebSocket-based bi-directional communication using Socket.IO
- 🧑‍🤝‍🧑 Multi-room support via dynamic room names
- 💡 Minimal and responsive front-end interface

---

## 🧪 Testing

Tested by opening multiple tabs or browsers:

- ✔️ Entered the same room name in both
- ✔️ Text changes were reflected live between users
- ✔️ Disconnection handled cleanly in console logs

---

## 📷 Output Screenshots



---

## ⚠️ Limitations

- No authentication or user identity tracking  
- No persistence of text (refreshing clears content)  
- No rich-text editing or formatting

---

## 🔮 Future Enhancements

- Integrate database to persist room notes  
- Add login system for user identity  
- Enable syntax highlighting or rich-text support  
- Add save/export features

---

## ✅ Status

**Task 3 Completed Successfully ✅**  
Live collaboration tested and working across multiple users in real time.
