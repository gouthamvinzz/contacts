import { ADD_NEW,MINUS_ONE } from "./../Action/Action";
import uniqueId from 'lodash.uniqueid';
const initialState ={
    contacts:[{id:uniqueId(),name:'Mike Hutson',email:'mikehutson@gmail.com',phone:'9876543212',position:'Product Manager',company:'Estra Botique ltd.',address:'47,west merapur'}]
}
const Reducer = (state = initialState ,action)=>{
    console.log('aaa',state,action)
switch(action.type)
{
    case 'ADD_NEW':
        return{
            contacts: state.contacts.concat([action.payload])
        }
    case 'DELETE':
        {
            return{
                contacts: state.contacts.filter((contact)=>contact.id !== action.payload)
            }
        } 
        case 'EDIT':
            {
                return{
                    contacts: state.contacts.map((contact)=>contact.id === action.payload.id ? action.payload:contact)
                }
            } 
            
    default:
    return state;       
}
}

export default Reducer;
