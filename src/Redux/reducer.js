import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';


const initialState = {
  contacts:
  
JSON.parse(localStorage.getItem("contacts"))||[],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: { 




      let flag=0
       if(action.payload.first_name==""||action.payload.last_name==""||action.payload.mob==""){
          alert('Please fill form')
        flag=1
      }
      else{
     state.contacts.forEach((el)=>{
        if(el.first_name==action.payload.first_name&&el.last_name==action.payload.last_name){
            alert('Name Already given')
            flag=1
        }
      
      })
      }
 

      if(!flag){
        alert('Contact Save done')
       
        let updatedContacts=JSON.parse(localStorage.getItem("contacts"))||[]
        updatedContacts.push({id:state.contacts.length+1,...action.payload})
        localStorage.setItem('contacts',JSON.stringify(updatedContacts))
          return {
        ...state,
        contacts: [
        ...updatedContacts],
      };
    
    }

      
      }
     
    case REMOVE_CONTACT:{

      let Contacts=JSON.parse(localStorage.getItem("contacts"))
     let updatedContacts=Contacts.filter((el)=>el.id!=action.payload.id)
      localStorage.setItem('contacts',JSON.stringify(updatedContacts))
          return {
        ...state,
       
        contacts:[...updatedContacts]
      };
   
    }
  
    case EDIT_CONTACT: {

      if(action.payload.first_name==""||action.payload.last_name==""||action.payload.mob==""){
        alert('please fill the form')
        return state
      }

      else{

      
        let flag=0
        let Contacts=JSON.parse(localStorage.getItem("contacts"))

        Contacts.forEach((el)=>{
          if(el.id!=action.payload.id&&el.first_name==action.payload.first_name&&el.last_name==action.payload.last_name){
            alert("Name Already added")
            flag=1
            return state
          }
        })
      
        if(flag){
          return state
        }
        else{
           let  updatedContacts=Contacts.map((el)=>{
          if(el.id==action.payload.id){
            return  el={...action.payload}
          }
          else{
            return el
          }
        })
        localStorage.setItem("contacts",JSON.stringify(updatedContacts))
        alert('Contact edit done.')
           return {
        ...state,
        contacts: state.contacts.map((el)=>{
          if(el.id==action.payload.id){
             return  el={...action.payload}

          }
          else{
            return el
          }
      
        }),
      };
        }
     
      }

     
      }
      
    default:
      return state;
  }
  
}
