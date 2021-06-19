import styled from "styled-components";
import { Button } from "antd";
import "./App.css";
import { connect } from "./helper";

const CustomButton = styled(Button)`
  background: pink;
`;

function App() {
  console.log(process.env.REACT_APP_AA);
  console.log(process.env.REACT_APP_TEST_API_KEY);
  return (
    <div>
      <header></header>
      <main>
        ブロックチェーンアプリ
        <CustomButton onClick={() => connect()}>aa</CustomButton>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
