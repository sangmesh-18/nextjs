import User from "@/models/User";
import { connectDB } from "@/dbConfig/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        if (!username || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
         // Check if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user=await new User({
            username,
            email,
            password: hashedPassword,
        }).save();

        return NextResponse.json({ 
            message: "User created successfully", 
            user }, 
            { status: 201 });

    }catch(error: unknown) {
       
        return NextResponse.json({  
            error: "Internal Server Error",
            details: (error as Error).message
         }, { status: 500 });
}
}



connectDB();