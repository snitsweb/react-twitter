import React from 'react';
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import {useHomeStyles} from "../pages/Home";
import classNames from 'classnames';

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullName: string;
        username: string;
        avatarUrl: string
    };
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweetsHeader, classes.tweet)}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar className={classes.tweetAvatar} alt={`${user.username}'s avatar`}
                            src={user.avatarUrl}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullName}</b>&nbsp;
                        <span className={classes.tweetsUserName}>
                            @{user.username}
                        </span>&nbsp;
                        <span className={classes.tweetsUserName}>·</span>&nbsp;
                        <span className={classes.tweetsUserName}>1h</span>
                    </Typography>
                    <Typography variant="body1">
                        {text}
                    </Typography>

                    <div className={classes.tweetsTooltipBlock}>
                        <div>
                            <IconButton className={classes.tweetsTooltipBtn}>
                                <CommentIcon style={{fontSize: 18}}/>
                            </IconButton>
                            <span style={{fontSize: 15}}>1</span>
                        </div>

                        <div>
                            <IconButton className={classes.tweetsTooltipBtn}>
                                <RepeatIcon style={{fontSize: 18}}/>
                            </IconButton>
                            <span style={{fontSize: 15}}>5</span>
                        </div>

                        <div>
                            <IconButton className={classes.tweetsTooltipBtn}>
                                <LikeIcon style={{fontSize: 18}}/>
                            </IconButton>
                            <span style={{fontSize: 15}}>18</span>
                        </div>

                        <IconButton className={classes.tweetsTooltipBtn}>
                            <ShareOutlinedIcon style={{fontSize: 18}}/>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};