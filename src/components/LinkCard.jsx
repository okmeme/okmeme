import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import TimeAgo from 'react-timeago';
import Tooltip from '@material-ui/core/Tooltip';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import ReportPanel from './ReportPanel';

function getHostname(url) {
  return new URL(url).host;
}

export function LinkCard(props) {
  const [mediaPreview, setMediaPreview] = React.useState(false);
  const [textPreview, setTextPreview] = React.useState(false);

  function handleMediaClick(event, value) {
    setMediaPreview(!mediaPreview);
  }

  function handleTextClick(event, value) {
    setTextPreview(!textPreview);
  }

  const { classes, mediaType, mediaTypes, categoryType, media, link, title, tags, points, author, timestamp, text } = props;

  let shortLink = 'text';
  if (link !== '#') {
    shortLink = getHostname(link)
  } else {
    shortLink = 'text'
  }

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardActionArea onClick={!text ? null : handleTextClick}>
          {link === '#' ?
            <CardContent>
              <Typography variant="h6">
                {mediaTypes[mediaType]['icon']}&nbsp;{title}
              </Typography>
            </CardContent>
            :
            <CardContent>
              <Tooltip title={link} placement='bottom-start'>
                <a href={link} target='_blank' rel="noopener noreferrer" className={classes.link}>
                  <Typography variant="h6">
                    {mediaTypes[mediaType]['icon']}&nbsp;{title} <Typography variant="overline" className={classes.linkPreview}>{shortLink}</Typography>
                  </Typography>
                </a>
              </Tooltip>
            </CardContent>
          }
          {!media ? null :
            <Hidden xsDown>
              <CardMedia
                className={mediaPreview ? classes.mediaFull : classes.mediaPreview}
                image={media}
                title={title}
                onClick={handleMediaClick}
              />
            </Hidden>
          }
          {!text ? null :
            <CardContent>
              {!textPreview ?
                <Typography variant="body1">{({ text }.text).substring(0, 64) + '...'}&nbsp;<AddCircleIcon /></Typography>
                :
                <Typography variant="body1">{text}&nbsp;<RemoveCircleIcon /></Typography>
              }
            </CardContent>
          }
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <ExpandLessIcon />&nbsp;{points > 0 ? points : null}
          </Button>
          <Button size="small" color="secondary">
            {/* hide name if not logged in */}
            {author}
          </Button>
          <Hidden xsDown>
            <Tooltip title={(new Date(parseInt({ timestamp }.timestamp)).toISOString())}>
              <Button size="small" color="primary">
                <TimeAgo date={parseInt(timestamp)} title='' />
              </Button>
            </Tooltip>
          </Hidden>
          <Hidden smDown>
            <Typography variant='body1'>|</Typography>
            <div className={classes.tags}>
              {tags.map((tag, index) => (
                <Button size="small" color="primary" key={title + tag + index}>
                  #{tag}
                </Button>
              ))
              }
            </div>
          </Hidden>
          <div className={classes.grow}></div>
          <ReportPanel classes={classes} />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default LinkCard;