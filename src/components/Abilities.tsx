'use client';
import * as React from 'react';
import data from '../../public/yong.json';
import InlineBox from './InlineBox';

const Abilities = () => {
	const { str, dex, con, int, wis, cha } = data.system.abilities;

	return (
		<>
			{str && (
				<InlineBox headingChildren='Strength'>{str.value}</InlineBox>
			)}
			{dex && (
				<InlineBox headingChildren='Dexterity'>{dex.value}</InlineBox>
			)}
			{con && (
				<InlineBox headingChildren='Constitution'>
					{con.value}
				</InlineBox>
			)}
			{int && (
				<InlineBox headingChildren='Intelligence'>
					{int.value}
				</InlineBox>
			)}
			{wis && (
				<InlineBox headingChildren='Strength'>{str.value}</InlineBox>
			)}
			{cha && (
				<InlineBox headingChildren='Charisma'>{cha.value}</InlineBox>
			)}
		</>
	);
};
export default Abilities;
