import { NextResponse } from "next/server";
import { promises as fs } from "fs";
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
    
    let users: User[] = [];
    try {
      const usersData = await fs.readFile(usersPath, "utf-8");
      users = JSON.parse(usersData);
    } catch (error) {
      // If the file does not exist or is empty, start with an empty array
    }

    // Check if user already exists
    if (users.find((u) => u.email === email)) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user
    const newUser: User = {
      id: users.length + 1,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      email,
      password: hashedPassword,
      role: "User",
    };

    // Save user
    users.push(newUser);
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2));

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
