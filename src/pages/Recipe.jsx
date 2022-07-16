import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();

  const [activeTab, setActiveTab] = useState("instructions"); //for two for add class  and display instruction,infor
  const [information, setInformation] = useState({});

  const fetchDetailss = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=596d509027a048f3bc79f7297e38cc62`
    );

    const data = await response.json();
    setInformation(data);
  };

  useEffect(() => {
    fetchDetailss();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{information.title}</h2>
        <img src={information.image} alt="..." />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <Details>
            <h3 dangerouslySetInnerHTML={{ __html: information.summary }}></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: information.instructions }}
            ></h3>
          </Details>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {information.extendedIngredients?.map((ith) => (
              <li key={ith.id}> {ith.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: felx;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
    text-decoration: none;
  }
  img {
    border-radius: 3rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 3rem;
  font-weight: 600;
  cursor: pointer;
  /* margin-left: 6rem; */
`;
const Details = styled.div`
  padding-right: 39rem;
`;

const Info = styled.div`
  margin-left: 4rem;
`;

export default Recipe;
