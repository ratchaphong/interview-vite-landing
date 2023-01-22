import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// npm init vite@latest
// npm install
// npm run dev

// Vite โดดเด่นเรื่องความเร็วในการติดตั้งและการรันในการทำงาน
// มาพร้อมกับ Fast Refresh เมื่อแก้ไขโค้ดแล้ว ผลลัพธ์จะแสดงในหน้าเว็บทันที(คล้ายกับ Hot Reload)
// และการรันเซิฟเวอร์ที่ใช้เวลาเพียงไม่ถึง 1 วินาที
// Vite โดดเด่นเรื่องขนาดของโปรเจคและไฟล์ที่ build เสร็จแล้ว จะมีขนาดเล็กกว่าของ CRA
// Vite ยังมีความสามารถอื่นๆ อีกเช่น Server-Side Rendering (SSR) และ Backend Integration
