import React, { useReducer, useState } from 'react'

export default function MyExampleReducer() {

    const myState = [];

    const myReducer = (state,action)=> {

            switch(action.type)
            {

                case "ADD" :

                return [...state, action.payload];
            
                case "Delete":

                return state.filter((d,index)=> {

                    return index != action.payload;
                });


                case "Save":

                

                return state.map((d,myundex) => {

                    if(myundex == action.index )
                    {
                        return action.payload;
                    }
                    else
                    {
                      return  d;
                    }

                });

                default :

                 return state;
            }

    }

    const myChange = (e)=> {

        setInput({...input,[e.target.name] : e.target.value});

    }

    const mySave = (e) => {

        if(index >= 0 )
        {
            setData({type:"Save", payload : input, index : index});
            setIndex(-1);

        }
        else
        {
        setData({type:"ADD", payload : input});
        }
    }
   const [data,setData]  = useReducer(myReducer, []);
   const [input,setInput] = useState({});
   const [index,setIndex] = useState(-1);

   const myDelete = (index)=> {

    setData({type:"Delete", payload : index,});
   }

   const edit = (index)=> {

    
   setInput(data[index]);
   setIndex(index);
   }


  return (
    <div>

            <input type="text"  name='item'
            
                value={input.item}
            onChange={myChange}/>

<input type="text"  name='item1'
            
            value={input.item1}
        onChange={myChange}/>

            <button onClick={mySave}>Save</button>

            {
                    data.map((element,index)=> {

                         return (<div>{element.item}
                         {element.item1} 
                         
                                <button onClick={()=> {
                                        myDelete(index)
                                }}>Delete</button>

                                <button onClick={()=> {
                                        edit(index)
                                }}>Edit</button>
                            </div>)
                    })  

            }
    </div>
  )
}
