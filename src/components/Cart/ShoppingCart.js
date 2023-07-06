import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: '20px',
  },
});

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const classes = useStyles();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const totalItems = cartItems.length;

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <p>Total de itens: {totalItems}</p>
      {cartItems.length === 0 ? (
        <Typography color="textSecondary">
           Seu carrinho está vazio.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" component="p">
                    Preço: {item.price}.00 MT
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                     Remover do Carrinho
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ShoppingCart;
