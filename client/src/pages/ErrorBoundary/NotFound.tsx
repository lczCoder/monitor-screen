import React, { useState } from 'react'

interface Props {
	fallback: React.ReactNode
	children: React.ReactNode
}
export default function NotFound(props: Props) {

	return (
		<>
			<div>404页面丢失啦</div>
		</>
	)
}
