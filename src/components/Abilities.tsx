'use client';
import * as React from 'react';
import data from '../../public/yong.json';
import InlineBox from './InlineBox';

const Abilities = () => {
	const { str, dex, con, int, wis, cha } = data.system.abilities;
	return (
		<>
			{str && (
				<InlineBox
					align='flex-end'
					display='inline-flex'
					headingChildren='Strength'
					justify='space-between'
				>
					<span className='round'>{str.value}</span>
				</InlineBox>
			)}
			{dex && (
				<InlineBox
					align='flex-end'
					display='inline-flex'
					headingChildren='Dexterity'
					justify='space-between'
				>
					<span className='round'>{dex.value}</span>
				</InlineBox>
			)}
			{con && (
				<InlineBox
					align='flex-end'
					display='inline-flex'
					headingChildren='Constitution'
					justify='space-between'
				>
					<span className='round'>{con.value}</span>
				</InlineBox>
			)}
			{int && (
				<InlineBox
					align='flex-end'
					display='inline-flex'
					headingChildren='Intelligence'
					justify='space-between'
				>
					<span className='round'>{int.value}</span>
				</InlineBox>
			)}
			{wis && (
				<InlineBox
					align='flex-end'
					display='inline-flex'
					headingChildren='Wisdom'
					justify='space-between'
				>
					<span className='round'>{wis.value}</span>
				</InlineBox>
			)}
			{cha && (
				<InlineBox
					align='flex-end'
					display='inline-flex'
					headingChildren='Charisma'
					justify='space-between'
				>
					<span className='round'>{cha.value}</span>
				</InlineBox>
			)}
		</>
	);
};
export default Abilities;
