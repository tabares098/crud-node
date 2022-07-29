const todoDB = [
    {
      id: 1,
      todo: " ,",
      matter: ",",
      teacher: ",",
      finished:""
      
      
    },
  ];

  const getAlltodo = () =>{
    return todoDB;
  };

  function gettodoById(id) {
    const filteredDB = todoDB.filter((todo) => todo.id === id)
    return filteredDB[0];
  }

  const createTodo = (todoObj) => {

   if(todoDB.length === 0) {
    const newTodo = {
        id:1,
        todo:todoObj.todo,
        matter:todoObj.matter,
        teacher:todoObj.teacher,
        finished: todoObj.finished,
        
    };
    todoDB.push(newTodo);
    return newTodo;
   }
   const newTodo ={
        id: todoDB[todoDB.length -1].id + 1,
        todo:todoObj.todo,
        matter:todoObj.matter,
        teacher:todoObj.teacher,
        finished: todoObj.finished,
       
   };
   todoDB.push(newTodo);
   return newTodo;
  };

  //Delete todo database

  const deletetodo = (id) => {
    const index = todoDB.findIndex(item => item.id === id)
    if(index !== -1) {
        todoDB.splice(index, 1)
    }
    return deletetodo
  }

  //update todo database

 const updatetodo = (id,data) => {
  const index = todoDB.findIndex((item) => item.id === id);
  if(index !== -1) {
    todoDB[index]=data
  return todoDB[index]
  }else{
    createTodo(data)
  }
  

 }

  /*const updatetodo = (data, id) => {
  const index = todoDB.findIndex(item => item.id === id)
  if(data.todo && data.matter && data.teacher ){
    todoDB[index] = {
        id,
        todo: data.todo,
        matter: data.matter,
        teacher: data.teacher,
        
    }
  }
  return todoDB[index]
  }*/

  module.exports ={
    getAlltodo,
    gettodoById,
    createTodo,
    updatetodo,
    deletetodo
    }