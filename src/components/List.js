import React, { Component } from 'react'

export default function List({todoData, setTodoData}) {


 
  const btnStyle = {
    color: "#ccc",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float:"right" 
  }

  
const handleCompleateChange= (id) => {
  let newTodoData = todoData.map(data => {
    if(data.id === id){
      data.completed = !data.completed;
    } 
    return data;
  })
  setTodoData(newTodoData);
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



    return (
      <div>

        {todoData.map(data => (// 키속성이없으면...리액트에서는 요소의 리스트를 나열할때 Key 넣어줘야해. 변경, 추가, 제거항목 식별을 위한 안정적인 ID부여를 위해서
        //그리고 인덱스넣는거는 추천하지 않음 ID순서랑 상반될수있어서
            <div style={getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange ={() => handleCompleateChange(data.id)} />
                {data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
          </div>
        ))}

      </div>
    )
  
}

