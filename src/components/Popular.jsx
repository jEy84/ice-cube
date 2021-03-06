// to get popular recipe
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // use number=1- for get 10 recipes from server

    const checkItem = localStorage.getItem("popular");

    if (checkItem) {
      setPopular(JSON.parse(checkItem));
    } else {
      // if item not set to localStorage

      const response = await fetch(
        ` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=10`
      );

      const data = await response.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      // console.log(data);
      setPopular(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular</h3>
        <Splide
          options={{
            perPage: 4,
            // arrows:false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((ith) => {
            return (
              <SplideSlide key={ith.id}>
                <Card>
                  <Link to={"/recipe/" + ith.id}>  {/*navigate to recipe page show all details about recipe */} 
                    <p>{ith.title}</p>
                    <img src={ith.image} alt="..." />
                    <Greadient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2rem 0rem;
  /* background-color: #053a3a; */
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
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
`;

const Greadient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
