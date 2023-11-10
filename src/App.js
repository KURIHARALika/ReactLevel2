import { useState, useCallback } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("APP");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  //表示ボタン処理
  const onClickOpen = () => setOpen(!open);

  //閉じるボタン処理
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <>
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </>
    </div>
  );
}
