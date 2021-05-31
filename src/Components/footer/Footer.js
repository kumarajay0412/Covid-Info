import React from "react";
import {Container} from '@material-ui/core';
import useStyles from './styles';
import {Grid,Card, CardContent,Typography} from '@material-ui/core';
import github from './../../assets/github.svg'
import linkdin from './../../assets/linkedin.svg'
import instagram from './../../assets/instagram.svg'

const Footer = () => {
	const classes = useStyles();
	return (
        <div>
            <Grid container spacing={4} direction="row" alignItems="center" justify="center"  >
                <Grid item xs={3} sm={1}>  
                    <a href="https://github.com/kumarajay0412">
                        <img className={classes.image} src={github} alt="CovidInfo" height="40"></img>
                    </a>
                </Grid>
                <Grid item xs={3} sm={1}> 
                    <a href ="https://www.linkedin.com/in/ajay-kumar-a5bb4b193/">
                        <img className={classes.image} src={linkdin}  alt="CovidInfo" height="40"></img>
                    </a>
                </Grid>
                <Grid item xs={3} sm={1}>  
                    <a href="https://www.instagram.com/ajay__kum__ar_/">
                            <img className={classes.image} src={instagram} alt="CovidInfo" height="40"></img>
                    </a>
                </Grid>
                <Grid item xs={12} sm={3}> 
                <Typography className={classes.black1}>Designed and Developed by Ajay kumar  </Typography>
                </Grid>
              
                <Grid item xs={12} sm={4}> 
                    <a href="https://www.instagram.com/ajay__kum__ar_/">
                        <Typography className={classes.black2}> Fell free to collaborate on Gihub</Typography>
                    </a>
                </Grid>

            </Grid>
        </div>
	)
}

export default Footer;