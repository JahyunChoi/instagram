import React, {useState} from "react";
import "./App.css";

export default function App() {
  const state = {
  todoData : [],
  value: ""
}

const [todoData, setTodoData] = useState([]);//빈배열
const [value, setValue] = useState("");//빈스트링
//const후 []안에있는것 첫번째는 인수변수이름 두번째 인수State를 정하는 함수

const btnStyle = {
  color: "#ccc",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float:"right" 
}

const getStyle = (completed) => {
  return {
    padding:"10px",
    borderBottom:"1px #ccc dotted",
    textDecoration: completed ? "line-through" : "none",
    }
}



const handleClick = (id) => {
  let newTodoData = todoData.filter((data) => data.id !== id);
  setTodoData(newTodoData);
}
const handleChange = (e) => {
  setValue(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();

  let newTodo = {
    id: Date.now(),
    title: value,
    completed: false
  } 

  //원래 있던 할 일에 새로운 할 일 더해주기
  //이미 있는 두가지가 넣어진거고 새로 뉴투두를 업데이트하는것
  setTodoData((prev) => [...prev, newTodo]);
  setValue("");
};
 

const handleCompleateChange= (id) => {
  let newTodoData = todoData.map(data => {
    if(data.id === id){
      data.completed = !data.completed;
    } 
    return data;
  })
  setTodoData(newTodoData);
}




return(
  //className은 JSX의 문법
  <div className="container">
      <div className="todoBlock">
      <div className="title">
        <h1>할 일 목록</h1>
      </div>    
      {todoData.map(data => (// 키속성이없으면...리액트에서는 요소의 리스트를 나열할때 Key 넣어줘야해. 변경, 추가, 제거항목 식별을 위한 안정적인 ID부여를 위해서
      //그리고 인덱스넣는거는 추천하지 않음 ID순서랑 상반될수있어서
          <div style={getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={false} onChange ={() => handleCompleateChange(data.id)} />
              {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>
        ))}
        <form style={{display:'flex'}} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px'}}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input 
            type="submit"
            value="입력"
            className="btn"
            style={{flex: '1'}}
          />
        </form>
    </div>
  </div>
  )
}