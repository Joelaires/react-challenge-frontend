import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: '20px',
  },
});

const ProductList = ({ products, addToCart }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;