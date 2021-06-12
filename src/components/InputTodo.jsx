import React from "react";

//TODO入力欄のコンポーネント化,他のファイルで使う場合exportをつける
//propsを使って他ファイルに必要な引数を渡す
export const InputTodo = (props) => {
  //propsの中身を分割代入して取り出し渡していく
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
