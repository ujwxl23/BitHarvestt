"use client";

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ModalTable() {
  const firebaseConfig = {
    apiKey: "AIzaSyAXHbnL5VwCvF9GTUATuNxWD0W_vyqgOZE",
    authDomain: "bitharvest-191db.firebaseapp.com",
    projectId: "bitharvest-191db",
    storageBucket: "bitharvest-191db.appspot.com",
    messagingSenderId: "735241696770",
    appId: "1:735241696770:web:50f1324b8c23c5f57b991b",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  const db = getDatabase();

  const [formData, setFormData] = useState({
    address: "",
    data: "",
    modelID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dbRef = ref(db, "formEntries");
      await push(dbRef, formData);
      console.log("Data pushed successfully");
      // Show success toast
      toast.success("Form submitted successfully");
      // Clear form after submission
      setFormData({
        address: "",
        data: "",
        modelID: "",
      });
    } catch (error) {
      console.error("Error pushing data: ", error);
      // Show error toast
      toast.error("Error submitting form");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Form Page</h2>
      <form style={{ width: "300px" }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              color: "black",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Data:</label>
          <input
            type="text"
            name="data"
            value={formData.data}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              color: "black",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            ModelID:
          </label>
          <input
            type="text"
            name="modelID"
            value={formData.modelID}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              color: "black",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
