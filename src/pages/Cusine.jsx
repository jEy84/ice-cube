// TO show cuisine Type
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cusine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams(); //paramas from router to get which type come like /cuisine/indian
 

  // run function with params.type and fetch data
  const getCuisine = async (name) => {
    const response = await fetch(`
    https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${name}
    `);

    const recipes = await response.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log();
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((ith) => {
        return (
          <Card key={ith.id}>
            <Link to={"/recipe/" + ith.id}>
              {/*navigete to recipe show page */}
              <img src={ith.image} alt="..." />
              <h4>{ith.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cusine;
