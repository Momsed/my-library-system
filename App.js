import React, { useState } from "react";
import "./App.css";

function App() {
  const [memberName, setMemberName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null); // success or error

  const handleRegister = () => {
    if (memberName && contact) {
      setStatus("success");
      setMessage("Member registered successfully!");
      setMemberName("");
      setContact("");
    } else {
      setStatus("error");
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Dashboard Summary */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={{ backgroundColor: "#2563EB", color: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Total Books</h3>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>1245</p>
        </div>
        <div style={{ backgroundColor: "#F59E0B", color: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Members</h3>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>326</p>
        </div>
        <div style={{ backgroundColor: "#7C3AED", color: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Books Issued</h3>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>89</p>
        </div>
      </div>

      {/* Registration Form */}
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "15px", color: "#2563EB" }}>Library Member Registration</h2>
        <input
          placeholder="Full Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          placeholder="Contact Info"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleRegister}
          style={{ width: "100%", padding: "10px", backgroundColor: "#2563EB", color: "white", border: "none", borderRadius: "5px" }}
        >
          Register Member
        </button>

        {message && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: status === "success" ? "#22C55E" : "#EF4444",
              color: "white",
              textAlign: "center",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default 'App';
