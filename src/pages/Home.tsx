import React from 'react';
import {
    Container,
    Grid,
    Paper,
    makeStyles,
    createStyles, withStyles, InputBase, Typography
} from "@material-ui/core";
import {Tweet} from "../components/Tweet";
import SideMenu from "../components/SideMenu";
import {theme} from "../theme";

export const useHomeStyles = makeStyles(() => ({
    sideMenuLinkWrapper:{
        borderRadius: 30,
        padding: '0 20px',
        height: 55,
        '&:hover span': {
            color: theme.palette.primary.main
        },
        '&:hover svg' : {
            color: theme.palette.primary.main
        }
    },
    sideMenuLink: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        '&.active span': {
            color: theme.palette.primary.main
        },
        '&.active svg' : {
            color: theme.palette.primary.main
        },
    },
    sideMenuTitle: {
        fontSize: 20,
        fontWeight: 700,
        color: "#252525"
    },
    sideMenuIconWrapper: {
        minWidth: 30,
        marginRight: 20,
        borderRadius: 20
    },
    sideMenuIcon: {
        fontSize: 28
    },
    sideMenuTweetBtn: {
        marginTop: 10,
        width: '100%',
        height: 50,
        borderRadius: '50px',
        textDecoration: 'none',
        boxShadow: 'rgb(0 0 0 / 8%) 0px 8px 28px',
        '&:hover span' : {
            color: "#fff"
        }
    },
    sideMenuTweetBtnText: {
        fontSize: 17,
        height: '100%'
    },
    tweetsWrapper: {
        padding: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
    },
    tweetsTitleWrapper: {
        padding: '20px 10px',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,

        '& h6': {
            fontWeight: 800,
        }
    },
    tweetsHeader: {},
    tweet: {
        transition: '.3s background-color ease-in-out',
        padding: '15px 10px',

        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
            cursor: 'pointer'
        }
    },
    tweetAvatar: {
        maxWidth: '100%',
    },
    tweetsUserName: {
        color: '#C2C2C2'
    },
    tweetsTooltipBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '90%'
    },
    tweetsTooltipBtn: {
        '&:hover span svg' : {
            color: theme.palette.primary.main
        }
    }
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,
        },
    }),
)(InputBase);


export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles()
    return (
        <Container maxWidth="xl">
            <section>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <SideMenu classes={classes}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.tweetsWrapper} style={{height: '100%'}} variant="outlined">
                            <Paper className={classes.tweetsTitleWrapper} variant="outlined">
                                <Typography variant="h6">Główna</Typography>
                            </Paper>
                            {[...Array(10).fill(
                                <Tweet text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum ea\n' +
                                '                        incidunt\n' +
                                '                        modi omnis recusandae sunt vero! Ab aperiam eligendi hic in ipsa labore nam,\n' +
                                '                        perferendis, perspiciatis quod sunt totam!'}
                                       classes={classes}
                                       user={{fullName: 'Oleks', username: 'snitsweb', avatarUrl: 'https://printlogo.pl/userdata/public/gfx/11300/Kaszkiet-Beechfield-Baker-Boy-B629.jpg'}}
                                />
                            )]}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <SearchTextField fullWidth placeholder="Szukaj w Twitter...">

                        </SearchTextField>
                    </Grid>
                </Grid>
            </section>
        </Container>

    );
}