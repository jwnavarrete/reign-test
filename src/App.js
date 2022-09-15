import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import ButtonGroup from "./components/ButtonGroup";
import Button from "./components/Button";
import Select from "./components/Select";
import Option from "./components/Option";
//
function App() {
  return (
    <Container>
      <Header>HACKER NEWS</Header>
      <Main>
        <ButtonGroup>
          <Button active>All</Button>
          <Button>My Faves</Button>
        </ButtonGroup>

        <div>
          <Select>
            <Option disabled selected>
              Select your news
            </Option>
            <Option>Angular</Option>
            <Option>Reats</Option>
            <Option>Vuejs</Option>
          </Select>
        </div>
      </Main>
    </Container>
  );
}

export default App;
