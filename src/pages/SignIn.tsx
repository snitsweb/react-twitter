import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { ModalBlock } from '../components/ModalBlock';


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',

    },
    descSide: {
        position : 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#69C4FC',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    descSideList: {
        position : 'relative',
        margin: 0,
        padding: 0,
        width: '80%',
        maxWidth: '380px'

    },
    descSideListItem: {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 20px 0',
        '& h6': {
            display : 'flex',
            color: 'white',
            alignItems: 'center',
            fontWeight: 600,
            fontSize: 20,
            lineHeight : '32px'
        },
        '&:last-child' : {
            margin : 0
        }

    },
    descSideListItemIcon : {
        fontSize : 32,
        marginRight : 15
    },
    descSideTwitterIcon : {
        position: "absolute",
        top : -500,
        left : -750,
        fontSize : 2000,
    },
    loginSide: {
        display: 'flex',
        flex: '0 0 50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
        marginBottom: 20
    },
    loginSideWrapper: {
        width: '80%',
        maxWidth: '380px'
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45
    },
    loginSideBtn: {
        marginTop: 20
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },

}))

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };


    return <section className={classes.wrapper}>
        <section className={classes.descSide}>
            <TwitterIcon className={classes.descSideTwitterIcon} color="primary"/>
            <ul className={classes.descSideList}>
                <li className={classes.descSideListItem}>
                    <Typography variant="h6"><SearchIcon className={classes.descSideListItemIcon}/>Czytaj to, co ci jest ciekawe.</Typography>
                </li>
                <li className={classes.descSideListItem}>
                    <Typography variant="h6"><PeopleIcon className={classes.descSideListItemIcon}/>Dowiedz się, o czym mówi świat.</Typography>
                </li>
                <li className={classes.descSideListItem}>
                    <Typography variant="h6"><MessageIcon className={classes.descSideListItemIcon}/>Dołącz do rozmowy.</Typography>
                </li>
            </ul>
        </section>
        <section className={classes.loginSide}>
            <div className={classes.loginSideWrapper}>
                <TwitterIcon className={classes.loginSideTwitterIcon} color="primary"/>
                <Typography className={classes.loginSideTitle} variant="h4"> Dowiedż się, co się dzieję w
                    świecie</Typography>
                <Typography> <b>Dołącz do Twitter teraz!</b></Typography>
                <Button onClick={handleClickOpenSignUp} className={classes.loginSideBtn} variant="contained" color="primary" fullWidth>Sign In</Button>
                <Button onClick={handleClickOpenSignIn} className={classes.loginSideBtn} variant="outlined" color="primary" fullWidth>Log In</Button>
            </div>
        </section>
        <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="Log In">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="email"
                        label="E-Mail"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="password"
                        label="Hasło"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="password"
                        fullWidth
                    />
                    <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                        Войти
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>
        <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="Sign In">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="name"
                        label="Имя"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="name"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="email"
                        label="E-Mail"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="password"
                        label="Пароль"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="password"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Далее
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>
    </section>
}