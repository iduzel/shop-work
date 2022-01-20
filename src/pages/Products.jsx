

import React, { useContext } from 'react';
import DataContext from '../redux/dataContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Products.css"
import { Link } from 'react-router-dom';

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
        height="320"
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
        
       <Link to={`/details/${item.id}`}> <Button size="small">Read More</Button></Link>
      </CardActions>
    </Card>




        ))
    }
      </div>
  
  </div>;
};

export default Products;
