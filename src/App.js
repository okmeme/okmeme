import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MovieIcon from '@material-ui/icons/Movie';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DevicesIcon from '@material-ui/icons/Devices';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CakeIcon from '@material-ui/icons/Cake';
import GradientIcon from '@material-ui/icons/Gradient';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PlaceIcon from '@material-ui/icons/Place';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PhotoIcon from '@material-ui/icons/Photo';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ChatIcon from '@material-ui/icons/Chat';
import SecurityIcon from '@material-ui/icons/Security';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import LinkCard from './components/LinkCard';
import SidebarItem from './components/SidebarItem';
import LoginNavbar from './components/LoginNavbar';
import LoginSidebar from './components/LoginSidebar';
import AdminNavbar from './components/AdminNavbar';
import AdminSidebar from './components/AdminSidebar';
import SubmitNavbar from './components/SubmitNavbar';
import SubmitSidebar from './components/SubmitSidebar';

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f57c00'
    },
    type: 'dark',
  }
});

const styles = {
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    color: 'white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'flex',
    flexGrow: 1,
    paddingTop: 64,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'unset',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  barTitle: {
    fontWeight: 600,
    fontStyle: 'italic',
    color: 'white',
  },
  content: {
    display: 'flex',
    flex: '1 1 100%',
    paddingTop: 64,
  },
  toolbar: {
    display: 'flex',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  logo: {
    width: drawerWidth,
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    marginRight: 0
  },
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  label: {
    paddingLeft: 10,
  },
  cardList: {
    flex: '0 0 100%',
    backgroundColor: theme.palette.background.default,
  },
  card: {
    flex: '0 0 100%',
    margin: 5,
  },
  hide: {
    display: 'none'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 24
  },
  listItemLabel: {
    fontWeight: 500,
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  linkPreview: {
    color: theme.palette.text.secondary,
  },
  navbarButton: {
    color: 'white',
    paddingRight: 10,
    marginRight: 10,
  },
  mediaPreview: {
    height: 100
  },
  mediaFull: {
    width: `calc(${window.innerWidth} - ${drawerWidth})`,
    maxWidth: `calc(${window.innerWidth} - ${drawerWidth} - 30)`,
    height: window.innerHeight,
    maxHeight: window.innerHeight,
  },
  selector: {
    '& .MuiSelect-root': {
      flex: 1,
      alignItems: 'left'
    }
  },
  list: {
    minWidth: 500,
  },
}

const categoryTypes = {
  'all': {
    name: 'All',
    icon: <GradientIcon />
  },
  'music': {
    name: 'Music',
    icon: <MusicNoteIcon />
  },
  'videos': {
    name: 'Videos',
    icon: <MovieIcon />
  },
  'images': {
    name: 'Images',
    icon: <CameraAltIcon />
  },
  'games': {
    name: 'Games',
    icon: <VideogameAsset />
  },
  'code': {
    name: 'Code',
    icon: <KeyboardIcon />
  },
  'tech': {
    name: 'Tech',
    icon: <DevicesIcon />
  },
  'cars': {
    name: 'Cars',
    icon: <DirectionsCarIcon />
  },
  'outside': {
    name: 'Outside',
    icon: <PlaceIcon />
  },
  'shopping': {
    name: 'Shopping',
    icon: <ShoppingCartIcon />
  },
  'food': {
    name: 'Food',
    icon: <FastfoodIcon />
  },
  'memes': {
    name: 'Memes',
    icon: <CakeIcon />
  },
}

const extraButtons = {
  'submit' : {
    name: 'Submit',
    icon: <AddBoxIcon />
  },
  'login' : {
    name: 'Login',
    icon: <InputIcon />
  },
  'admin': {
    name: 'Admin',
    icon: <SecurityIcon />
  }
}

const mediaTypes = {
  'image': {
    name: 'Image',
    icon: <PhotoIcon />
  },
  'video': {
    name: 'Video',
    icon: <MovieIcon />
  },
  'audio': {
    name: 'Audio',
    icon: <AudiotrackIcon />
  }, 
  'url': {
    name: 'URL',
    icon: <OpenInNewIcon />
  },
  'text': {
    name: 'Text',
    icon: <ChatIcon />
  }
}

export function App(props) {

  const {classes} = props;

  const [open, setOpen] = React.useState(true);

  function handleDrawer(event, value) {
    setOpen(!open);
  }

  // const themeIcon = !theme ? <Brightness7Icon /> : <Brightness3Icon /> 
  
  return(
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.root}>
        <AppBar position="fixed" className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}>

          <Toolbar disableGutters={true} >
            <IconButton onClick={handleDrawer} className={classNames(classes.menuButton, {[classes.hide]: !open})}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawer}
                        className={classNames(classes.menuButton, {
                          [classes.hide]: open,
                        })}>
              <MenuIcon/>
            </IconButton>
            <Typography className={classes.barTitle} variant='h4'>OKMEME!</Typography>

            <div className={classes.grow}></div>
            {/* TODO toggle for light mode */}
            {/* <IconButton onClick={handleTheme}>
              {themeIcon}
            </IconButton> */}
            
            <Hidden smDown>
              <AdminNavbar classes={classes} extraButtons={extraButtons} />
              <SubmitNavbar classes={classes} mediaTypes={mediaTypes} extraButtons={extraButtons} />
              <LoginNavbar classes={classes} extraButtons={extraButtons}/>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <List>
              <ListItem button key='nav' onClick={handleDrawer}>
                <ListItemIcon><MenuIcon/></ListItemIcon>
                <ListItemText>Navigation</ListItemText>
              </ListItem>
            </List>
          </div>
          <List>
            <SidebarItem classes={classes} item={categoryTypes['all']} />
            <Divider/>
            <SidebarItem classes={classes} item={categoryTypes['music']} tags={['Electronic', 'Chill', 'Classical', 'Rock']} />
            <SidebarItem classes={classes} item={categoryTypes['videos']} tags={['YouTube', 'GFY', 'Other']} />
            <SidebarItem classes={classes} item={categoryTypes['images']} tags={['Imgur', 'Art', 'Instagram']} />
            <SidebarItem classes={classes} item={categoryTypes['games']} tags={['PC', 'XBOX', 'PlayStation', 'Nintendo', 'Mobile']} />
            <SidebarItem classes={classes} item={categoryTypes['code']} tags={['Web', 'Python', 'Games']} />
            <SidebarItem classes={classes} item={categoryTypes['tech']} tags={['Computers', 'Phones', 'Gadgets', 'Wearables']} />
            <SidebarItem classes={classes} item={categoryTypes['cars']} tags={['Four Wheels', 'Two Wheels']} />
            <SidebarItem classes={classes} item={categoryTypes['outside']} tags={['Camp', 'Hike', 'Run']} />
            <SidebarItem classes={classes} item={categoryTypes['shopping']} tags={['Deals', 'Parts']} />
            <SidebarItem classes={classes} item={categoryTypes['food']} tags={['Recipes', 'Videos']} />
            <SidebarItem classes={classes} item={categoryTypes['memes']} tags={['.jpg', '.gif', '.mp4']} />
            <Hidden mdUp>
              {/* TODO FIGURE OUT WHY THIS DOESN'T WORK */}
              <Divider/>
              <SubmitSidebar classes={classes} mediaTypes={mediaTypes} extraButtons={extraButtons} />
              <LoginSidebar classes={classes} extraButtons={extraButtons} />
              
              {/* hide if not staff */}
              <Divider/>  
              <AdminSidebar classes={classes} extraButtons={extraButtons} />
            </Hidden>
            
            
          </List>

        </Drawer>
        <div className={classes.content} color='default'>
          <List className={classes.cardList}>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'text'} points='12' link='#' timestamp='1553239282400' title='lizard really long text title asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf qwerty qwerty qwerty' tags={['a', 'b', 'c']} author='bob'/>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'url'} points='23' link='https://okme.me' timestamp='1553238236670' title='asdf asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'image'} points='69' media='https://i.redd.it/piutnnjg3en21.png' link='https://i.redd.it/piutnnjg3en21.png' timestamp='1553238236670' title='satiscraftory' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'text'} points='0' link='#' timestamp='1553238236670' title='asdf sddf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'image'} points='42' media='https://i.redd.it/piutnnjg3en21.png' link='https://reddit.com/r/satisfactorygame' timestamp='1553238236670' title='satsifacredditory' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'audio'} points='42' media='' link='https://soundcloud.com/majorleaguewobs/hamster-dance-trap-remix' timestamp='1551038236670' title='asdf a' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'text'} points='42' link='#' timestamp='1553238236670' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe' text='this is self text now boiz aslkdjf ajskfk fskld ajljfklajshfja hjkdfhsfhjks kdsajlf jdskl fjash fjkdhsjkafhajkshfjkdhsjka hfsdjkh fjkasdhfjksdhkaflhsdjklh asjkfh asdjkh fjkash kfjldhskja hfsdjkl hfjkasdh jkl hjkh fjkds ajkh s akljdfklsjkf akfdkl klajfkajfkdjkfjskl akl fklsdjklf askf sdkl jfsdjfklfj sdajfklaj fklsd fklsd flsd klsda fklj'/>
            <LinkCard classes={classes} mediaTypes={mediaTypes} mediaType={'video'} points='42' link='https://www.youtube.com/watch?v=RM4IjR3DtrQ' timestamp='1553238236670' title='asdfaaasss' tags={['aas', 'basdf', 'casdf']} author='joe'/>
          </List>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(App));
