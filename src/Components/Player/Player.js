import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './Player.css';
const Player = ({player,handleAdd}) => {
 
     
    const { age, role, salary, first_name, image }= player;
    return (
        <Card className='card_container col-md-3 col-lg-6 m-3 ' sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="players"
                height="50%"
                image={ image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { first_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h6 className='font-weight-bold'>Age : {age}</h6>
                    <h6 className='font-weight-bold'>Salary : $ {salary}k</h6>
                    <h6 className='font-weight-bold  '>Role : {role}</h6>
                
                </Typography>
            </CardContent>
            <CardActions className='d-flex mx-auto'>
      
                <button onClick={() => handleAdd(player)} type="button" className="addPlayer btn btn-success  ">Add Player</button>
            </CardActions>
        </Card>
    );
};

export default Player;