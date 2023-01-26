import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TodoPage from "./TodoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}
