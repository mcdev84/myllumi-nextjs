import { useEffect, useState } from 'react'

export const GetDatas = () => {
	const [storageState, setState] = useState([])

	const callBackendAPI = async () => {
		const response = await fetch('/event_lists')
		const body = await response.json()
		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body
	}

	useEffect(() =>
		          callBackendAPI().then(res => setState(res.events), []))


	return (
		<>
			{ console.log('store=>', storageState) }
		</>
	)
}