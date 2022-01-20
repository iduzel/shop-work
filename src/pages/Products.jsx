

import React, { useContext } from 'react';
import DataContext from '../redux/dataContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Products.css"

const Products = () => {
    const products = useContext(DataContext)
  return <div className="products">
      <h1>hello from products</h1>
      <div className="products-wrapper">

            {
        products?.data?.map((item)=>(

<Card className="products-card" key={item.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>




        ))
    }
      </div>
  
  </div>;
};

export default Products;
