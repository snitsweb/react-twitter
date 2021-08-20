import React from 'react';
import {NavLink} from "react-router-dom";
import {List, ListItem, ListItemIcon, ListItemText, Button} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <div>
            <List>
                <ListItem button className={classes.sideMenuLinkWrapper}>
                    <NavLink className={classes.sideMenuLink} to="/home">
                        <ListItemIcon className={classes.sideMenuIconWrapper}>
                            <TwitterIcon className={classes.sideMenuIcon}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.sideMenuTitle}}>Główna</ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem button className={classes.sideMenuLinkWrapper}>
                    <NavLink className={classes.sideMenuLink} to="/about">
                        <ListItemIcon className={classes.sideMenuIconWrapper}>
                            <SearchIcon className={classes.sideMenuIcon} />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.sideMenuTitle}}>Szukaj</ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem button className={classes.sideMenuLinkWrapper}>
                    <NavLink className={classes.sideMenuLink} to="/about">
                        <ListItemIcon className={classes.sideMenuIconWrapper}>
                            <NotificationsIcon className={classes.sideMenuIcon} />
                        </ListItemIcon>
                        <ListItemText
                            classes={{primary: classes.sideMenuTitle}}>Powiadomienia</ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem button className={classes.sideMenuLinkWrapper}>
                    <NavLink className={classes.sideMenuLink} to="/about">
                        <ListItemIcon className={classes.sideMenuIconWrapper}>
                            <EmailIcon className={classes.sideMenuIcon} />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.sideMenuTitle}}>Wiadomości</ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem button className={classes.sideMenuLinkWrapper}>
                    <NavLink className={classes.sideMenuLink} to="/about">
                        <ListItemIcon className={classes.sideMenuIconWrapper}>
                            <BookmarkBorderIcon className={classes.sideMenuIcon} />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.sideMenuTitle}}>Zakładki</ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem button className={classes.sideMenuLinkWrapper}>
                    <NavLink className={classes.sideMenuLink} to="/about">
                        <ListItemIcon className={classes.sideMenuIconWrapper}>
                            <ListAltIcon className={classes.sideMenuIcon} />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.sideMenuTitle}}>Lista</ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem button className={classes.sideMenuLinkWrapper}>
                    <NavLink className={classes.sideMenuLink} to="/about">
                        <ListItemIcon className={classes.sideMenuIconWrapper}>
                            <PersonOutlineIcon className={classes.sideMenuIcon} />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.sideMenuTitle}}>Profil</ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem >
                    <NavLink className={classes.sideMenuTweetBtn} to="/">
                        <Button className={classes.sideMenuTweetBtnText} variant="contained" color="primary" fullWidth>Tweetnij</Button>
                    </NavLink>
                </ListItem>

            </List>
        </div>
    );
}

export default SideMenu;