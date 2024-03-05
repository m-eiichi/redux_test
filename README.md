# Reduxについて
state（状態）を容易に管理をするためのフレームワーク  
### なぜReduxを利用するのか
- stateを管理し易くなるため
- テストが容易になるため
- stateの変更を遡れる拡張（Redux DevTool）など、便利なツールを使った開発が可能なため

stateの管理が複雑な大規模アプリケーションなどので利用すると便利。  
小規模なアプリケーションやちょっとしたサービスを作る程度なら必要ない。



## Action
アクション（何が起きたのか）とそれに付随する情報を持つオブジェクト。

ActionをStoreへdispatch（送信）すると、Storeのstateが変更される。stateの変更は必ずActionを経由して行う。

以下はActionの例。  
ADD_TODOというタイプのアクションとそれに付随する情報であるtext: 'Go to swimming pool'を持つ。
```jsx
//sample
const action = {
  type: 'ADD_TODO',
  text: 'Go to swimming pool'
};
```
アクションのタイプを示すtypeプロパティは必須。

Actionはstateの変更に必要だが、イベントとそれに付随する情報しか持たないため、stateがどのような変更をされるのかは知らない。



## Reducer
Storeから受け取ったActionとstateに応じて、変更されたstateを返す純粋関数（同じ引数を渡されたら必ず同じ結果を返す関数）。

以下はReducerの例。ADD_TODOというタイプのアクションがdispatchされた時に、stateを変更して返している。

```jsx
//sample
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);

    default:
      return state;
  }
}
```

## Store
アプリケーションの全てのstateを保持するオブジェクト。

ActionをStoreにdispatchする手段（store.dispatch()）を提供する。また、stateとdispatchされたActionを、指定したReducerに渡してstateを変更する。

以下はStoreの例。Reducerを指定し、アクションをdispatchしている。
```jsx
//sample
// Action
const action = {
  type: 'ADD_TODO',
  text: 'Go to swimming pool'
};

// Reducer
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);

    default:
      return state;
  }
}

// Store
// createStore()の第1引数に渡したReducerがActionをdispatchする度に実行される
// 今回はtodosを渡しているため
// Actionをdispatchする度にtodosが実行され、Actionに応じたstateを返す
const store = Redux.createStore(todos);

// Actionをdispatchする
// Reducerであるtodosが実行され、Storeが保持しているstateが変更される。
store.dispatch(action);

// stateを取得する
console.log(store.getState()); // =>  [{text: "Go to swimming pool", completed: false}]
```

## dispatch

### 参考サイト
- [Redux 入門 〜Reduxの基礎を理解する〜](https://qiita.com/soarflat/items/bd319695d156654bbe86)

- [Reduxが分からない人のためにReduxを概念から説明してみる](https://qiita.com/tkow/items/9da7062f9bfa99e848c3)