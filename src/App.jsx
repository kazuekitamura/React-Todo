import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncmpleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

// 状態が変化していくもの（TODOの中身）はステートとして定義する。
//setIncompleteTodosはincompleteTodosを更新する関数
//useState([]);空の初期値を渡す
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //inputに入力された値を取り出し未完了のTODOに追加する。スプレッド構文を使って配列を生成する
  const onClickAdd = () => {
    //inputTextの値が空であれば処理しない
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //inputに空文字を渡して表示を消す
    setTodoText("");
  };

  //削除ボタン、何行目の削除ボタンが押されたかを引数indexとして渡す
  const onClickDelete = (index) => {
    //このindexをもとにincompleteTodos（未完了のTODO）から値を消す
    const newTodos = [...incompleteTodos];
    //新しく設定する配列をnewTodos とする。splice(何番目の要素,何個削除するか);
    newTodos.splice(index, 1);
    //削除後に値を再設定、未完了のTODOを更新する
    setIncompleteTodos(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    //incompleteTodos（未完了のTODO）から値を消す,新しい未完了のTODOをnewIncompleteTodosとする
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    //新しい完了のTODOの生成
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //削除後に値を再設定、未完了のTODO,追加された完了のTODOを更新する
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻すボタン
  const onClickBack = (index) => {
    //完了のTODOから削除する
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    //未完了のTODOに追加する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* TODO入力欄のコンポーネントの呼び出し propsを渡しそれぞれステートと関数を渡している*/}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* 未完了TODO欄のコンポーネントの呼び出し*/}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* 完了TODO欄のコンポーネントの呼び出し*/}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
