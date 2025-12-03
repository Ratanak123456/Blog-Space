
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import * as bcrypt from "bcryptjs";

interface User {
  id: number;
  slug: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validate inputs
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    // Path to users.json
    const usersPath = path.join(process.cwd(), "src/data/users.json");
    const usersData: { users: User[] } = JSON.parse(
      fs.readFileSync(usersPath, "utf-8")
    );

    // Check if user already exists
    if (usersData.users.find((u) => u.email === email)) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user
    const newUser: User = {
      id: usersData.users.length + 1,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      email,
      password: hashedPassword,
      role: "User",
    };

    // Save user
    usersData.users.push(newUser);
    fs.writeFileSync(usersPath, JSON.stringify(usersData, null, 2));

    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
