import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: '20px',
  },
});

const ProductDetails = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="h6" component="p">
            Preço: {product.price}.00 MT
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;