import React, { useState } from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    let salary = 0;
    cart.forEach(element => {
        salary = salary + element.salary;


    });

    //choose fvrt player from cart
    const [fvrt, setFvrt] = useState([])
    const handleFavourite = () => {
        if (cart.length === 0) {
            console.log("empty")
            alert("Please add player first ");

        } else {
            const result = cart[Math.floor(Math.random() * cart.length)];

            const fvrtPlayername = result;
            setFvrt(fvrtPlayername);
        }
    }

 
    //remove all players from the cart
   return (
        <div className='mainCart'>
            <h1 className='text-warning'>Players Cart</h1>
            <h6 className='text-light'>Selsected Player: {cart.length}</h6>
            <h6 className='text-light'>Total Salary: {salary} K</h6>
            <button className='btn btn-outline-warning my-2' onClick={handleFavourite}>Choose Favourite Player</button>

            <div className="rows">

               {
                (cart.length===0) ? 
                <p className='d-none'>empty</p> : 
                
                        <div className="rows">
                            <img id='fvrtImg' src={fvrt.image} alt="" />

                            <h4>{fvrt.first_name}</h4>
               </div>

               }

            </div>

            <h4 className='text-warning '>List of Players :</h4>

            <table class="table table-bordered">
                <thead>
                    <tr className='text-warning'>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>

                        <th scope="col">Salary</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>


                    {

                        cart.map((x, i) =>

                            (cart.length === 0) ?
                                <h1>Length is 0</h1>
                                :


                                <tr className="" >


                                    <td className="text-light"> {++i}</td>
                                    <td className="text-light"> {x.first_name}</td>

                                    <td className="text-light"> ${x.salary}k</td>

                                    <td className="text-light"> {x.role}</td>
                                </tr>


                        )
                    }



                </tbody>
            </table>




            




        </div>
    );
};

export default Cart;