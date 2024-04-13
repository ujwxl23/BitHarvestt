"use client";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

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

  const [modelID, setModelID] = useState("1");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [modelID]);

  const fetchData = async () => {
    try {
      const dbRef = ref(db);
      const queryRef = child(dbRef, "formEntries");
      const snapshot = await get(queryRef);
      const entries = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const entry = childSnapshot.val();
          if (entry.modelID === modelID) {
            entries.push(entry);
          }
        });
        setData(entries);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Modal Owner Page</h2>
      {error && <div>Error: {error}</div>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <FormControl>
          <InputLabel id="modelID-label" marginBottom="30px">
            Select Model ID
          </InputLabel>
          <Select
            labelId="modelID-label"
            value={modelID}
            onChange={(e) => setModelID(e.target.value)}
            style={{ backgroundColor: "white", marginTop: "50px" }} // Change background color here
          >
            <MenuItem value="1">Model 1</MenuItem>
            <MenuItem value="2">Model 2</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
      </div>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "50%", margin: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.address}</TableCell>
                <TableCell>{entry.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
