'use client'

import { useEffect, useState } from 'react'

export default function UserList() {
  const [users, setUsers] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [view, setView] = useState<'list' | 'grid'>('list')
  const [customer, setCustomer] = useState<any>(null)
  const user = {  id: 1,
    name: 'John Doe',
    email: 'dsfds@gmail.com'
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/users')

        if (!res.ok) throw new Error('Failed to fetch users')

        const data = await res.json()
        setUsers(data) // Fallback to a default user if none are fetched
      } catch (err) {
        console.error('Error fetching users:', err)
        setError((err as Error).message)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">👥 User Directory</h2>

      {error && (
        <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
          {error}
        </p>
      )}
      <div className="flex justify-center mb-6 gap-4">
        <button
          className={`px-4 py-2 rounded text-gray-800 ${
            view === 'list' ? 'bg-blue-600 !text-white' : 'bg-gray-200'
          }`}
          onClick={() => setView('list')}
        >
          List View
        </button>
        <button
          className={`px-4 py-2 rounded text-gray-800 ${
            view === 'grid' ? 'bg-blue-600 !text-white' : 'bg-gray-200'
          }`}
          onClick={() => setView('grid')}
        >
          Grid View
        </button>
      </div>

      <div
        className={`${
          view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'flex flex-col gap-2'
        }`}
      >
        {users.map(user => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow hover:shadow-md hover:scale-[1.01] transition-all duration-200 bg-white"
          >
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.name}</p>
            <p className="text-gray-600">{user.govinda}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
