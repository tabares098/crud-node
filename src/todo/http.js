const {getAlltodo,gettodoById,createTodo,deletetodo,updatetodo} = require('./controller')

const getAll = (req, res) => {
    const data = getAlltodo()
    res.status(200).json({
        items: data.length,
        response:data
    })
};

const getById = (req, res) => {
    const id = number(req.params.id)

    if(id){
        const data = gettodoById(id);
        if(data.id){
            res.status(200).json(data);
        }else {
            res.status(400).json({message: 'Invalid ID'});
            }
        }else {
        res.status(400).json({message: 'Id is not a number'});
    }
};

const create = (req, res) => {
    const data = req.body
    if(data.todo && data.matter && data.teacher && data.finished) {
        const response = createTodo(data);
        res.status(201).json(response/*{message:'todo list create', data: result}*/);
    }else {
        res.status(400).json({message: 'invalid arguments'});
    }
}

const deletetodoByid = (req,res) => {
 const id = Number(req.params.id)
 console.log(typeof id)
 if( typeof id === 'number'){
    const deleted = deletetodo(id)
    if(deleted){
        res.status(204).json()
    }else{
        res.status(400).json({message: 'Try whith invalid ID'})
    }
    }else{
    res.status(400).json({message: 'invalid ID'})
 }
}

 

const update = (req, res) => {
   const id = Number(req.params.id)
   const data = req.body
   if(data.todo && data.matter && data.teacher) {
    const response = updatetodo(id,data)
    res.status(201).json({message:"toso edited succesfully", data: response})
}else {
    res.status(400).json({message: 'invalid arguments'})
}
}


module.exports={
    getAll,
    getById,
    create,
    deletetodoByid,
    update
}