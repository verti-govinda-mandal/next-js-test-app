// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/usersdafs')
    if (!res.ok) throw new Error('Failed to fetch users')
    // If the response is not ok, throw an error
    // This will be caught by the catch block below
    // Fetch users from an external API
    
    const users = await res.json()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong', error: (error as Error).message },
      { status: 500 }
    )
  }
}
