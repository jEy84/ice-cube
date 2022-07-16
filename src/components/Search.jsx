import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


function Search() {

    const [userInput,setUserInput] = useState("");
    const navigate = useNavigate(); 

    const  submitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/'+userInput);
    }   

  return (
    <FormStyle  onSubmit={submitHandler}>
        <div>
            
        <FaSearch></FaSearch>
        <input onChange={
            (e)=>{
                setUserInput(e.target.value);
            }
        } type="text" value={userInput}/>
        </div>

    </FormStyle>

    )
}

const FormStyle = styled.form`
        margin:0rem 20rem;
        div{
            width: 100%;
            position: relative;

        }
        width: 100%;
        input{
            border: none;
            background: linear-gradient(35deg,#494949,#313131);
            font-size:1.5rem;
            color: white;
            padding:1rem 3rem;
            border: none;
            border-radius: 1rem;
            outline: none;
            width: 75%;
            /* position: fixed; */
        }
        svg{
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(100%,-50%);
            color: white;

        }

`


export default Search