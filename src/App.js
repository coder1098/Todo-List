import './App.css';
import React, {useState} from 'react';

function App() {
  let [content, setcontent] = useState("");
  let [list, setlist] = useState([])

  return (
    <div className="container">
      <h1 className='todo_app'>Todo List</h1>
      <div className="nav_todo">
        <input type="text" className="content" id="content" value={content} onChange={(e) => setcontent(e.target.value)}/>
        <button className='add_ele' onClick={() => {
            if (content != '') {
              setlist([...list, content])
              content = '';
              setcontent(content);
            }
          }}>Add</button>
      </div>
      <div className='item_container'>
        {
          list.map((e, i) => {
            return (
              <div className='item'>
                <p key={i}>{e}</p>
                <button onClick={() => setlist(list.filter((ele, ile) => ile != i))}>delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
