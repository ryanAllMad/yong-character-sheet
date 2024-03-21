'use client';
import * as React from 'react';
import { Grid, Stack, Paper, Typography } from '@mui/material';
import data from '../../public/yong.json';
import Heading from './Heading';

const Abilities = () => {
const { str, dex, con, int, wis, cha }	= data.system.abilities
	return (
			<Grid xs={6} md={4} item>
			{ str && <><Heading level="h3">Strength</Heading><Typography>{str.value}</Typography></>}
			{ dex && <><Heading level="h3">Dexterity</Heading><Typography>{dex.value}</Typography></>}
			{ con && <><Heading level="h3">Constitution</Heading><Typography>{con.value}</Typography></>}
			{ int && <><Heading level="h3">Intelligence</Heading><Typography>{int.value}</Typography></>}
			{ wis && <><Heading level="h3">Strength</Heading><Typography>{str.value}</Typography></>}
			{ cha && <><Heading level="h3">Charisma</Heading><Typography>{cha.value}</Typography></>}
			</Grid>
	)
}
export default Abilities