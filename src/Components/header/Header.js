import React from "react";
import {Container} from '@material-ui/core';
import useStyles from './styles';
import CovidInfo from '../../assets/CovidInfo.svg';

const Header = () => {
	const classes = useStyles();
	return (
		<Container position="static">
			<img className={classes.image} src={CovidInfo} alt="CovidInfo" height="60"></img>
		</Container>
	)
}

export default Header;