

import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../redux/dataContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Products.css"
import { Link } from 'react-router-dom';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Products = () => {
    
    const products = useContext(DataContext)
    const [category,setCategory ] = useState(products?.data?.map(item =>item.category))
    const[currentCategory,setCurrentCategory] = useState(null)


    useEffect(()=>{
        // category!==null && setCategory([...new Set(category)])
        console.log(currentCategory)
    },[currentCategory])
    // useEffect(()=>{
    //     let tmp = category;
    //     tmp.push("all");
    //     setCategory(tmp);
    //     console.log(category)
    // },[category])
  return <div className="products">
      <h1>hello from products</h1>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCategory}
          // defaultValue={"all"}
          label="Category"
          onChange={(e)=> setCurrentCategory(e.target.value)}
        >
            {
               category!==null && [... new Set(category)].map((item,index)=>(
                    <MenuItem selected={true} key={index} value={item}>{item}</MenuItem>
                ))
            }
            <MenuItem key={-1} value={'all'}>{"all"}</MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
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
