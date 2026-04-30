import { NextResponse } from "next/server"; 

export async function POST(){
     try{
    

      const response = await fetch("https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300", {  // fetch() is a built-in browser API 
        method: "GET",      // Sends an HTTP request(GET, POST, etc.) => Returns a Promise => Gets data from a server/API
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,  //! -> Tells ts that "Trust me. This value WILL exist. It is not undefined."
          "X-RapidAPI-Host": process.env.RAPIDAPI_HOST!, // process is a global Node.js object -> It represents the running Node.js process -> .env file is not directly accessible
        }
      });
    
      const data = await response.json();
      return NextResponse.json(data)
   
    }
    catch(error){
       return NextResponse.json(
      { error: "Failed to fetch from RapidAPI" },
      { status: 500 }
    );
    }
   
};