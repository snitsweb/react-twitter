import React from 'react';
import {
    Avatar,
    Button,
    Container, Divider,
    Grid, InputAdornment, ListItemAvatar, ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import {Tweet} from "../../components/Tweet";
import SideMenu from "../../components/SideMenu";
import {SearchTextField} from "../../components/SearchTextField"
import {useHomeStyles} from "./theme";
import SearchIcon from "@material-ui/icons/Search";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CircularProgress from '@material-ui/core/CircularProgress';
import {AddTweetForm} from "../../components/AddTweetForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoaded, selectTweetsItems} from "../../store/ducks/tweets/selector";
import {selectIsTagsLoaded, selectTagsItems} from "../../store/ducks/tags/selector";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import Tags from "../../components/Tags";

export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()

    const tweets = useSelector(selectTweetsItems)
    const isLoadedTweets = useSelector(selectIsTweetsLoaded)

    const tags = useSelector(selectTagsItems)
    const isLoadedTags = useSelector(selectIsTagsLoaded)


    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    },  // eslint-disable-next-line
        [])

    return (
        <Container maxWidth="xl">
            <section>
                <Grid container spacing={3}>
                    <Grid item sm={1} md={3}>
                        <SideMenu classes={classes}/>
                    </Grid>
                    <Grid item sm={8} md={6}>
                        <Paper className={classes.tweetsWrapper} style={{height: '100%'}} variant="outlined">
                            <Paper className={classes.tweetsHeader} variant="outlined">
                                <Typography variant="h6">G????wna</Typography>
                            </Paper>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>

                            {isLoadedTweets ? <div className={classes.tweetsCentered}><CircularProgress /> </div> : tweets.map(tweet =>
                                <Tweet key={tweet._id}
                                       text={tweet.text}
                                       classes={classes}
                                       user={tweet.user}
                                />
                            )}
                        </Paper>
                    </Grid>
                    <Grid className={classes.leftSideBar} item sm={3} md={3}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="?????????? ???? ????????????????"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes} items={tags} isLoaded={isLoadedTags}/>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>???????? ????????????</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dock Of Shame"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @FavDockOfShame
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component="li"/>
                            </List>
                        </Paper>


                    </Grid>
                </Grid>
            </section>
        </Container>

    );
}