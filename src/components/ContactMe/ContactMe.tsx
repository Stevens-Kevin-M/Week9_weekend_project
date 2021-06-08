import React from 'react';
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
        container: {
          borderRadius: "5px",
          backgroundColor: "Black",
          padding: "20px",
          color: "White",
          display: 'flex',
          fontFamily: "Arial",
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
            color: 'White'
        },
        navigation: {
            display: 'flex'
        },
        nav_a: {
            display: 'block',
            padding: '1em',
            color: 'Chartreuse'
        },
      }
);


export const ContactMe =( ( props:Props ) => {
    // Create our class variable
    const classes = useStyles();

        return (
            <div>       
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
                </div>

                <div className={classes.container}>
                    <form action="action_page.php">
                        <input type="text" id="fname" name="firstname"/>
                        <label htmlFor="fname">    First Name    </label>
                            <br/><br/>
                        <input type="text" id="lname" name="lastname"/>
                        <label htmlFor="lname">    Last Name    </label>
                            <br/><br/>
                        <input type="text" id="phone" name="phonenumber"/>
                        <label htmlFor="phone">    Phone Number    </label>
                            <br/><br/>
                        <input type="text" id="email" name="email"/>
                        <label htmlFor="email">    Email    </label>
                            <br/><br/>
                        <input type="text" id="country" name="country"/>
                        <label htmlFor="country">    Country    </label>
                            <br/><br/>
                        <textarea id="subject" name="subject"></textarea>
                        <label htmlFor="subject">    Subject    </label>
                            <br/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>

                <div className={classes.main}>

                </div>

            </div>
            
                )
});