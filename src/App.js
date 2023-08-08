import React, {useState} from "react";
import "./App.css";
import List from "./components/Lists"
import Form from "./components/Form"


export default function App() {
  const state = {
  todoData : [],
  value: ""
}

const [todoData, setTodoData] = useState([]);//빈배열
const [value, setValue] = useState("");//빈스트링
//const후 []안에있는것 첫번째는 인수변수이름 두번째 인수State를 정하는 함수

const handleSubmit = (e) => {
  e.preventDefault();

  let newTodo = {
    id: Date.now(),
    title: value,
    completed: false,
  } 

  //원래 있던 할 일에 새로운 할 일 더해주기
  //이미 있는 두가지가 넣어진거고 새로 뉴투두를 업데이트하는것
  setTodoData((prev) => [...prev, newTodo]);
  setValue("");
};
 
return(
  //className은 JSX의 문법
  <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
    <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
      <div className="flex justify-between mb-3">
        <h1>할 일 목록</h1>
      </div>    
  
      <List todoData={todoData} setTodoData={setTodoData} />

      <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
        
    </div>
  </div>
  );
}