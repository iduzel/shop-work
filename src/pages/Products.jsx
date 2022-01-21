import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../redux/dataContext';
import './Products.css'

const Products = () => {

    const data = useContext(DataContext)
    const [items,setItems] = useState(null)
    const [categories, setCategories] = useState(null)
    const [currentCategory,setCurrentCategory] = useState("all");

    

    const fetchCategories = (data)=>{
            let tmp =[ ... new Set(data?.map((el)=>el.category))]
        tmp.push('all');
        tmp.sort()
        setCategories([...tmp]);
    }
    const filterData = (data) =>{
        return currentCategory ==="all"? data: data?.filter(item => item.category=== currentCategory)
    }

    useEffect(()=>{
        setItems(data?.data);
    })

    useEffect(()=>{
        fetchCategories(data?.data);
    },[items])

    useEffect(()=>{

    },[currentCategory])

  return <div className='products'>
       <h1>hello from products</h1>
        {/* ------ */}
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCategory}
          defaultValue="all"
          displayEmpty
          label="Category"
          onChange={(e)=> setCurrentCategory(e.target.value)}
        >
          {
            categories?.map((item,index)=>(
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box> 
        {/* end select category */}
        <div className="products-wrapper">
            {
        filterData(data?.data)?.map((item)=>(

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
         ))}
        </div>


  </div>;
};

export default Products;
