import React, { useReducer } from 'react'

export default function MyHookExample() {

    const initialTodos = [
        {
          id: 1,
          title: "Todo 1",
          complete: false,
        },
        {
          id: 2,
          title: "Todo 2",
          complete: false,
        },
      ];


 const reducer = (state, action) => {
        switch (action.type) {
          case "COMPLETE":
            return state.map((todo) => {
              if (todo.id === action.id) {
                return { ...todo, complete: !todo.complete };
              } else {
                return todo;
              }
            });

            case "Delete" :
                return state.filter((todo)=> {
                    return todo.id != action.id;
                });
          default:
            return state;
        }      };


        const handleComplete = (todo)=> {

            setData({ type: "COMPLETE", id: todo.id })
        }

        const handleDelete = (todo) => {
         
            setData({ type: "Delete", id: todo.id })
        }
      

  const [data,setData]  = useReducer(reducer,initialTodos);

  return (
    <div>
            {
                    data.map((element)=> {

                        return (
                            <div>

                            <label>
            <input
              type="checkbox"
              checked={element.complete}
              onChange={() => handleComplete(element)}
            />
            {element.title}

            
          </label>
          <button onClick={()=> {handleDelete(element)}}>Delete</button>

                                </div>
                        )

                    })

            }

    </div>
  )
}
