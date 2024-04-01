'use client';
import * as React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Heading from './Heading';

interface InlineBox {
	children: React.ReactNode | React.ReactElement | any
	headingChildren: React.ReactNode
	direction?: string
	justify: string
	display: string
	align: string
}

const InlineBox = (props: InlineBox) => {
	const { children, headingChildren, justify, display, direction, align } = props
	const theme = useTheme()
	const query = useMediaQuery(theme.breakpoints.down('md'))
	const style = {
		display: display,
		color: theme.palette.info.light,
		flexDirection: direction,
		flexWrap: 'wrap',
		justifyContent: justify,
		alignItems: align,
		width: '100%',
		padding: query ? '2em 0 0' : '2em 0.5em 0'
	} as React.CSSProperties
	return (
		<Box sx={style}>
			<Heading variant="h3" headingChildren={headingChildren} />
			{' '}
			<Typography sx={{ marginLeft: '0.33em' }}>{children}</Typography>
		</Box>
	)
}
export default InlineBox