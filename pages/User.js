import React          from 'react'
import { useSession } from 'next-auth/client'

export default function User () {
	const { data: session } = useSession()
	if (!session) {
		return <p>You are not logged in.</p>
	}
	return <h1>you are logged in</h1>
}
