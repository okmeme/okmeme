import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ChatIcon from '@material-ui/icons/Chat';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Hidden from '@material-ui/core/Hidden';
import TimeAgo from 'react-timeago';
import Tooltip from '@material-ui/core/Tooltip';

class LinkCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mediaPreview : false, textPreview : true };
  }

  handleMediaClick = () => {
    this.setState(state => ({ mediaPreview: !state.mediaPreview }));
  };

  handleTextClick = () => {
    this.setState(state => ({ textPreview: !state.textPreview }));
  };

  render() {
    const {classes, media, link, title, Icon, tags, points, author, timestamp, text} = this.props;
    return (
      <Card className={classes.card}>
      <CardActionArea onClick={!text ? null : this.handleTextClick}>
        {!link ?
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}&nbsp;<ChatIcon color="primary"/>
            </Typography>
          </CardContent>
        :
          <CardContent>
            <a href={link} target='_blank' className={classes.link}>
              <Typography variant="h5" component="h2">
              {title}&nbsp;<OpenInNewIcon color="primary"/>
              </Typography>
            </a>
          </CardContent>
        }
        {!media ? null :
          <Hidden xsDown>
            <CardMedia
              className={this.state.mediaPreview ? classes.mediaFull : classes.mediaPreview}
              image={media}
              title={title}
              onClick={this.handleMediaClick}
            />
          </Hidden>
        }
        {!text ? null :
          <CardContent>
            {this.state.textPreview ?
              <Typography variant="body1">{({text}.text).substring(0, 64) + '...'}&nbsp;<AddCircleIcon/></Typography>
              :
              <Typography variant="body1">{text}&nbsp;<RemoveCircleIcon/></Typography>
            }
          </CardContent>
        }
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ExpandLessIcon />&nbsp;{points > 0 ? points : null}
        </Button>
        <Button size="small" color="primary">
          {/* hide icon if all view */}
          <Icon/>
        </Button>
        <Button size="small" color="secondary">
          {/* hide name if not logged in */}
          {author}
        </Button>
        <Hidden xsDown>
          <Tooltip title={(new Date(parseInt({timestamp}.timestamp)).toISOString())}>
            <Button size="small" color="primary">
              <TimeAgo date={parseInt(timestamp)} title=''/>
            </Button>
          </Tooltip>
        </Hidden>
        <Hidden smDown>
          <Typography variant='body1'>|</Typography>
          <div className={classes.tags}>
            {tags.map((tag, index) => (
              <Button size="small" color="primary" key={title+tag+index}>
              #{tag}
              </Button>
            ))
            }
          </div>
        </Hidden>
        <div className={classes.grow}></div>
      </CardActions>
    </Card>
    );
  }
}

export default LinkCard;