
import React, { useEffect, useState } from 'react'

import styled from "styled-components";
import {Splide,SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/css';

function Veggie() {
 const [veggie, setVeggie] = useState([]);

  useEffect(()=>{
    getVeggie();
  },[]);

  const getVeggie = async () =>{
    // use localStorage becuase limited amount of API request
    const checkItem = localStorage.getItem('veggie');
    
    if(checkItem){
      setVeggie(JSON.parse(checkItem));
    }else{
      const response = await fetch(` https://api.spoonacular.com/recipes/random?apiKey=3a0fff23a7174236ba4ba0e9da1c1a02&number=10&tags=vegetarian`)
      
      const data = await response.json();

      localStorage.setItem("veggie",JSON.stringify(data.recipes));
      setVeggie(data.recipes);

    }

  }


  return (

    <div>
      <Wrapper>
        <h3>Veggie's</h3>
        <Splide
          options={{
            perPage:3,
            arrows:false,
            pagination:false,
            drag:'free',
            gap: '5rem'
          }}
        >
        {
  
          veggie.map((ith)=>{
            return(
              <SplideSlide key={ith.id} >

                <Card >
                <p>{ith.title}</p>
              <img src={ith.image} alt="..." />
              <Greadient/>
                </Card>
              </SplideSlide>
            );
          })
        }
          </Splide>
      </Wrapper>
      </div>
    )
  }


  const Wrapper = styled.div`
  margin: 2rem 0rem;
  /* background-color: #053a3a; */
`
const Card = styled.div`
  min-height: 15rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Greadient =styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
height:100%;
background: linear-gradient( rgba(0,0,0,0) ,rgba(0,0,0,0.5) );
`

export default Veggie