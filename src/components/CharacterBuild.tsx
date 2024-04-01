'use client';
import * as React from 'react';
import { Stack } from '@mui/material';
import data from '../../public/yong.json';
import InlineBox from './InlineBox';

const CharacterBuild = () => {
	return (
		<>
			<Stack spacing={1}>
				<InlineBox
					align='flex-end'
					display='flex'
					justify='flex-start'
					headingChildren='Class: '
				>
					{' '}
					Paladin
				</InlineBox>
				<InlineBox
					align='flex-end'
					display='flex'
					justify='flex-start'
					headingChildren='Race: '
				>
					{' '}
					{data.system.details.race}
				</InlineBox>
				<InlineBox
					align='flex-end'
					display='flex'
					justify='flex-start'
					headingChildren='Alignment: '
				>
					{' '}
					{data.system.details.alignment}
				</InlineBox>
				<InlineBox
					align='flex-end'
					display='flex'
					justify='flex-start'
					headingChildren='Hit Points: '
				>
					{' '}
					{`${data.system.attributes.hp.value}`}
				</InlineBox>
				<InlineBox
					align='flex-end'
					display='flex'
					justify='flex-start'
					headingChildren='XP: '
				>
					{`${data.system.details.xp.value}`}
				</InlineBox>
				<InlineBox
					align='flex-end'
					display='flex'
					justify='flex-start'
					headingChildren='Bio: '
				>
					{' '}
					{data.system.details.biography.value}
				</InlineBox>
				<InlineBox
					align='flex-end'
					display='flex'
					justify='flex-start'
					headingChildren='Flaw: '
				>
					{' '}
					{data.system.details.flaw}
				</InlineBox>
			</Stack>
		</>
	);
};
export default CharacterBuild;
