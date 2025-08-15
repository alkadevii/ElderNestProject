// App.jsx
import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:5000/") // change to your backend's base URL
      .then((res) => res.text()) // or .json() depending on your API
      .then((data) => {
        setMessage("Backend is working! Response: " + data);
      })
      .catch((err) => {
        setMessage("Backend check failed: " + err.message);
      });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>{message}</h1>
    </div>
  );
}
