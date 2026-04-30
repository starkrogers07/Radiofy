"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setloading] = useState(false);

  const handlePlay = async() => {
     try{
      setloading(true);

      const response = await fetch("/api/play", { // This is working like a API gateway 
        method: "POST",
      });
      
      const data = await response.json();
      console.log(data);
     }
     finally{
      setloading(false);
    }
  };


  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        <span className="text-amber-300">Radiofy</span>
        <button 
          onClick = {handlePlay}
          className="ml-4 px-4 py-2 bg-amber-300 v rounded-md hover:scale-105 transition">
          {loading ? "Loading..." : "O"} 
          </button>
      </h1>
    </div>
  );
}
 
