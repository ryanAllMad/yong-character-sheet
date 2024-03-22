'use client';
import * as React from 'react';
import { Stack } from '@mui/material';
import data from '../../public/yong.json';
import InlineBox from './InlineBox';

const CharacterBuild = () => {
	return (
		<>
			<Stack spacing={1}>
				<InlineBox headingChildren="Class: ">
					Paladin
				</InlineBox>
				<InlineBox headingChildren='Race: '>
					{data.system.details.race}
				</InlineBox>
				<InlineBox headingChildren='Alignment: '>
					{data.system.details.alignment}
				</InlineBox>
				<InlineBox headingChildren='Hit Points: '>
					{`${data.system.attributes.hp.value}`}
				</InlineBox>
				<InlineBox headingChildren='XP: '>
					{`${data.system.details.xp.value}`}
				</InlineBox>
				<InlineBox headingChildren='Bio: '>
					{data.system.details.biography.value}
				</InlineBox>
				<InlineBox headingChildren='Flaw: '>
					{data.system.details.flaw}
				</InlineBox>
			</Stack>
		</>
	);
};
export default CharacterBuild;
