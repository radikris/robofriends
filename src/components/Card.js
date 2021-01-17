import React from 'react';

const Card = (props) => {
     //vagy ezt a {name, email, id} lehetne props helyére
    //es az majd automatikusan destructolja 
    const {name, email, id} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

            <img src={`https://robohash.org/${props.id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;