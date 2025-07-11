import Register from "./components/Register"; 
import Login from "./components/Login"; 
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ height: 800, display: 'flex', justifyContent: "center", alignItems: "center"}}>
        <div style={{ padding: "40px", textAlign: "center" }}>
        <Register />
        <br />
      </div>
    </div>
  );
}

