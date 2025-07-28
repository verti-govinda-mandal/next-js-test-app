// app/api/users/route.ts
import { NextResponse } from 'next/server'
import { serverInstance } from '@/app/rollbar'

export async function GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/usersqerew2')
    if (!res.ok) throw new Error('Failed to fetch users')
    console.info('Server started successfully')
    console.warn({ userId: 42 }, 'User attempted invalid action')
    console.error(new Error('Unexpected failure'))
    const users = await res.json()
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', JSON.stringify(error))
    console.trace('Error stack trace:', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: (error as Error).message },
      { status: 500 }
    )
  }
}