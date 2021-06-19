import styled from "styled-components";
import { Button } from "antd";
import "./App.css";

const CustomButton = styled(Button)`
  background: pink;
`;

function App() {
  return (
    <div>
      <header></header>
      <main>
        ブロックチェーンアプリ
        <CustomButton>aa</CustomButton>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
