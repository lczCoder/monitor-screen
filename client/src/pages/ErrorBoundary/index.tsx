import React, { useState } from 'react'

interface Props {
	fallback: React.ReactNode
	children: React.ReactNode
}
export default function Error(props: Props) {
	const [error, setError] = useState({
		hasError: false,
		error: null,
	})

	return (
		<>
			{props.children} {error.hasError && props.fallback}
		</>
	)
}
