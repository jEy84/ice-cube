// to display search result
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searRcpi, setSeachRcpi] = useState([]);
  let params = useParams();

  const getSearchRcpi = async (name) => {
    const response = await fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}`
    );

    const recipe = await response.json();
    setSeachRcpi(recipe.results);
  };

  useEffect(() => {
    getSearchRcpi(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searRcpi.map((ith) => {
        return (
          <Card key={ith.id}>
            <Link to={"/recipe/" + ith.id}> {/*navigate to show page recipe */}
              <img src={ith.image} alt="..." />
              <h4>{ith.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
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

export default Searched;
