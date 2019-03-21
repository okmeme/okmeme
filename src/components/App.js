import React, {Component} from 'react';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import InputIcon from '@material-ui/icons/Input';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import DeleteIcon from '@material-ui/icons/Delete';
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

import jsxToString from 'jsx-to-string';

import LinkCard from './LinkCard';

/* global d3 */

const drawerWidth = 200;

const styles = theme => ({
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
    overflow: 'hidden',
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
    overflow: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
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
    margin: theme.spacing.unit * 2,
    display: 'flex',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  
  label: {
    paddingLeft: 10,
  },
  cardList: {
    flex: '0 0 100%',
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
  }
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#f57c00'
    },
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open : true,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {classes} = this.props;
    
    return <div className={classes.root}>
      <CssBaseline/>
      <MuiThemeProvider theme={theme}>
        <AppBar position="fixed" className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}>
          <Toolbar disableGutters={true} >
            <IconButton onClick={this.handleDrawerClose} className={classNames(classes.menuButton, {[classes.hide]: !this.state.open})}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}>
              <MenuIcon/>
            </IconButton>
            <Typography className={classes.barTitle} variant='h4'>OKMEME</Typography>
            
            <div className={classes.grow}></div>  
          </Toolbar>
        </AppBar>



        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <List>
              <ListItem button key='nav' onClick={this.handleDrawerClose}>
                <ListItemIcon><MenuIcon/></ListItemIcon>
                <ListItemText>Navigation</ListItemText>
              </ListItem>
            </List>
          </div>
          
          <List>
          <ListItem button key='all' className={classes.listItem}>
              <ListItemIcon><GradientIcon/></ListItemIcon>
              <ListItemText>All</ListItemText>
            </ListItem>
            <ListItem button key='music' className={classes.listItem}>
              <ListItemIcon><MusicNoteIcon/></ListItemIcon>
              <ListItemText>Music</ListItemText>
            </ListItem>
            <ListItem button key='videos' className={classes.listItem}>
              <ListItemIcon><MovieIcon/></ListItemIcon>
              <ListItemText>Videos</ListItemText>
            </ListItem>
            <ListItem button key='pics' className={classes.listItem}>
              <ListItemIcon><CameraAltIcon/></ListItemIcon>
              <ListItemText>Pics</ListItemText>
            </ListItem>
            <ListItem button key='games' className={classes.listItem}>
              <ListItemIcon><VideogameAsset/></ListItemIcon>
              <ListItemText>Games</ListItemText>
            </ListItem>
            <ListItem button key='tech' className={classes.listItem}>
              <ListItemIcon><DevicesIcon/></ListItemIcon>
              <ListItemText>Tech</ListItemText>
            </ListItem>
            <ListItem button key='cars' className={classes.listItem}>
              <ListItemIcon><DirectionsCarIcon/></ListItemIcon>
              <ListItemText>Cars</ListItemText>
            </ListItem>
            <ListItem button key='outside' className={classes.listItem}>
              <ListItemIcon><PlaceIcon/></ListItemIcon>
              <ListItemText>Outside</ListItemText>
            </ListItem>
            <ListItem button key='shop' className={classes.listItem}>
              <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              <ListItemText>Shopping</ListItemText>
            </ListItem>
            <ListItem button key='memes' className={classes.listItem}>
              <ListItemIcon><CakeIcon/></ListItemIcon>
              <ListItemText>Memes</ListItemText>
            </ListItem>
          </List>
            
          <Divider/>
        </Drawer>
        <main className={classes.content}>

          <List className={classes.cardList}>
            <LinkCard classes={classes} media='' title='lizard and really long text title asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf' tags={['a', 'b', 'c']} author='bob'/>
            <LinkCard classes={classes} media='' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} media='' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} media='' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} media='' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} media='' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} media='' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            <LinkCard classes={classes} media='' title='asdf' tags={['aas', 'basdf', 'casdf']} author='joe'/>
            
          </List>

        </main>
      </MuiThemeProvider>
    </div>;
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
