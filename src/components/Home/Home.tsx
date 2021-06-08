import React from 'react';
// New Styles Code
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import coding_image from '../../assets/images/CodeWall.jpeg';
import { AuthCheck } from 'reactfire';
import { Link } from 'react-router-dom';


interface Props{
    title: string
}

//New Styling Code
const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a:{
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textDecoration: 'none',
        color: 'Chartreuse'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'Chartreuse'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coding_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text: {
        fontFamily: "Arial",
        textAlign: 'center',
        position: 'relative',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'White',
        fontSize: '30px'
    }

});


export const Home = ( props:Props ) => {
    // Create our classes variable
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={`${classes.logo}`}>
                        <Link to="/" className={`${classes.logo_a} ${classes.logo_navigation}`}></Link>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={classes.nav_a}>Portfolio / Resume</Link>
                        </li>
                        <li>
                            <Link to="/contactme" className={classes.nav_a}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <br/>
                    <Link to='/portfolio'>
                        <Button color='primary' variant="contained">Explore My Portfolio</Button>
                    </Link>
                    
                </div>
            </main>
        </div>
    )
}