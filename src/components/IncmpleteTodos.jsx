import React from "react";

//未完了TODOのコンポーネント化
export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      {/* incompleteTodosの配列を順番に処理するmapを使ってアロー関数ループを記述する 。
mapなどを使ってレンダリングする際は一番初めの親タグにkey={}を渡す
仮想DOMは変更前と変更後で差分だけ抽出して差分だけ反映している。ループでレンダリングされた場合、
何個目の要素であるかの目印がkey*/}
      {/* mapの一つ目の引数にtodo（TODO内容）、２つ目の引数としてindex(何番目か) を渡す
{() => onClickDelete(index)}アロー関数で記述することですぐに実行されなくなる*/}
      <ul>
        {todos.map((todo, index) => {
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
  );
};
