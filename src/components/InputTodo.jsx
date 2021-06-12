import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

//TODO入力欄のコンポーネント化,他のファイルで使う場合exportをつける
//propsを使って他ファイルに必要な引数を渡す
export const InputTodo = (props) => {
  //propsの中身を分割代入して取り出し渡していく
  const { todoText, onChange, onClick, disabled } = props;
  return (
    // Todoが５個以上になった場合inputとボタンはdisabled
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
