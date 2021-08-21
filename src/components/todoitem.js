import React from 'react'

const todoitem = props => {
    return (
        <div>
          <p>{props.todo.text}</p>
          <button>Add</button>
          <button>complete</button>
        </div>
    )
}

export default todoitem
