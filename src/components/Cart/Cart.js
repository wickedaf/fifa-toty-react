import React from 'react';
const Cart = (props) => {
    const hiredPlayer = props.cartInfo;
    let salary = hiredPlayer.reduce( (item, hiredPlayer) => item + hiredPlayer.salary,0);  

    // let salary = 0;
    // for (let i = 0; i < hiredPlayer.length; i++) {
    //     const element = hiredPlayer[i];
    //     salary = salary + element.salary;
    // }
    return (
        <div>
            <h3>Player Hired : {hiredPlayer.length}</h3>
            <h3>Player Salary : {salary}</h3>
        </div>
    );
};

export default Cart;