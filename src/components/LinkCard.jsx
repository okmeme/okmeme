import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

class LinkCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes, media, title, tags, author} = this.props;
    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={'' || media}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ExpandLessIcon /> 42
        </Button>
        <Button size="small" color="secondary">
          {author}
        </Button>
        <Typography variant='body1'>|</Typography>
        <div className={classes.tags}>
        {tags.map((tag, index) => (
          <Button size="small" color="primary" key={title+tag+index}>
          #{tag}
          </Button>
        ))
        }
        </div>
        <div className={classes.grow}></div>
      </CardActions>
    </Card>
    );
  }
}

export default LinkCard;