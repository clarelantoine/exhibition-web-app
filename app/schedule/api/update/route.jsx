// Import necessary modules
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { uploadJSONFileToStorage } from "@/lib/firebase";

export const revalidate = 0


// Define the POST handler for the file upload
export const POST = async (req, res) => {
  // Parse the incoming form data
//   

if(req.method === "POST") {

    const data = await req.json();

    console.log(data)

    try {
        await uploadJSONFileToStorage(data);
        
        // Return a JSON response with a success message and a 201 status code
        return NextResponse.json({ Message: "Success", status: 201 });
    } catch (error) {
        // If an error occurs during file writing, log the error and return a JSON response with a failure message and a 500 status code
        console.log("Error occurred ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
}

    // const data = await req.json();
    // console.log(data);
    // return new NextResponse("Hello, Next.js!");

//   // Get the file from the form data
//   const file = formData.get("file");

//   // Check if a file is received
//   if (!file) {
//     // If no file is received, return a JSON response with an error and a 400 status code
//     return NextResponse.json({ error: "No files received." }, { status: 400 });
//   }

//   // Convert the file data to a Buffer
//   const buffer = Buffer.from(await file.arrayBuffer());

//   // Replace spaces in the file name with underscores
//   const filename = file.name.replaceAll(" ", "_");
//   console.log(filename);

//   
};