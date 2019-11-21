import React from 'react';
import style from './style';
import props from './props';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core/';

const DonationCard = (props) => {
  return (
    <Card style={style.card}  >
      <CardActionArea style={style.card.action}>
        <CardContent>
          <Typography style={style.card.title} gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

DonationCard.propTypes = {
  ...props,
};

export default DonationCard;
