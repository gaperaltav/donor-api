import React from 'react';
import style from './style';
import props from './props';
import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core/';

const DonationCard = (props) => {
    return (
        <Card style={style.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Ok</Button>
            </CardActions>
        </Card>
    );
};

DonationCard.propTypes = {
    ...props,
};

export default DonationCard;
