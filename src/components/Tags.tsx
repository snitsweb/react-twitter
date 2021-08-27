import React from 'react';
import {Divider, ListItemText, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {useHomeStyles} from "../pages/Home/theme";
import {TagsState} from "../store/ducks/tags/contracts/state";
import CircularProgress from "@material-ui/core/CircularProgress";

interface TagsPropsInterface {
    classes: ReturnType<typeof useHomeStyles>
    items: TagsState['items']
    isLoaded: boolean
}

const Tags: React.FC<TagsPropsInterface> = ({classes, items, isLoaded}: TagsPropsInterface) => {
    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    isLoaded ? <div className={classes.tweetsCentered}>< CircularProgress/></div>
                        : items.map(item => (
                            <React.Fragment key={item.name + "list"}>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                                  primary={item.name}
                                                  secondary={
                                                      <Typography component="span"
                                                                  variant="body2" color="textSecondary">
                                                          Твитов: {item.count}
                                                      </Typography>
                                                  }
                                    />
                                </ListItem>
                                <Divider component="li"/>
                            </React.Fragment>
                        ))
                }
            </List>
        </Paper>
    );
};

export default Tags