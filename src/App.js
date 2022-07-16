import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import {Link,BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"} > icecube </Logo>
      </Nav>
      <Search/>
      <Categories/>

      <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster', cursive;
`
const Nav = styled.div`
/* padding: 4rem 0rem; */
margin-bottom: 2rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`

export default App;
