import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        {/* incompleteTodosの配列を順番に処理するmapを使ってアロー関数ループを記述する 。
mapなどを使ってレンダリングする際は一番初めの親タグにkey={}を渡す
仮想DOMは変更前と変更後で差分だけ抽出して差分だけ反映している。ループでレンダリングされた場合、
何個目の要素であるかの目印がkey*/}
        {/* mapの一つ目の引数にtodo（TODO内容）、２つ目の引数としてindex(何番目か) を渡す
{() => onClickDelete(index)}アロー関数で記述することですぐに実行されなくなる*/}
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>もどす</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
