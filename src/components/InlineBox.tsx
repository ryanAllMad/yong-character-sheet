'use client';
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Heading from './Heading';

interface InlineBox {
	children: React.ReactNode | React.ReactElement
	headingChildren: React.ReactNode
}

const InlineBox = (props: InlineBox) => {
	const { children, headingChildren } = props
	const style = {
		display: 'block'
	} as React.CSSProperties
	return (
		<Box sx={style}>
			<Heading variant="h3" headingChildren={headingChildren} />
			<Typography sx={style}>{children}</Typography>
		</Box>
	)
}
export default InlineBox