import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Navs from '../Nav/Nav';
import Player from '../Player/Player';
import './Home.css';
const Home = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);



    const handleAdd = (player) => {
         
        const newCart = [...cart, player]
        if (newCart.length <= 11) {
           
            setCart(newCart)
        }
        else {
            alert(" You only can add 11 players")
        }


    }



    return (
        <div className='roots '>
            <Navs></Navs>
            <h1 className='text-center text-warning'>Total Player : {players.length}</h1>
            <div className="main ">
                <div className="players row ">

                    {
                        players.map(player => <Player player={player} key={player.id} handleAdd={handleAdd}></Player>)

                    }
                </div>
                <div className="cart">

                    <Cart cart={cart}></Cart>



                </div>

            </div>

        </div>
    );
};

export default Home;