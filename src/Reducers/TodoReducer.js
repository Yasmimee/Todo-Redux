
import { ADDTODO, TODODONE } from '../actions/Types';
 
 const initialState= { 
todos: [
{
   id: 1,
   text: "Sleep",
   complete : false,

},
{
   id: 2 ,
   text: "Workout",
   complete : false
},

{
   id:3 ,
   text: "Eat",
   complete : false
},
{
   id: 4 ,
   text: "Study",
   complete : false
},
{
   id:5 ,
   text: "read",
   complete : false
}
 ]
}

const TodoReducer =(state= initialState, action)=> {
 switch(action.type){
    case ADDTODO:
       return {
         ...state,
         todos:[
            ...state.todos,
            {id: Math.random(), text: action.payload, complete: false }
         ]
      };
      case TODODONE:
         return{
            ...state,
            todo : state.todo.map((el)=>
            el.id === action.payload ? {...el, complete: !el.complete }: el
            )
         };
 
    default : 
    return state
 }
}
export default  TodoReducer