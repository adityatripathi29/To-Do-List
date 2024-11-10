import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("")
  const [Task, setTask] = useState([])
  
  const submitHandler = (e)=>{
    e.preventDefault();
    setTask([...Task,{title,completed:false}]);
    settitle("")
    console.log(Task)
  }
  

  let rendertasks = (<h1 className="text-orange-600 text-2xl font-extrabold text-center mt-10">No pending tasks</h1>);

  const CompleteHandler = (e,index)=>{
    const copytask = [...Task];
    copytask[index].completed = !copytask[index].completed;
    setTask(copytask);
 }
 const DeleteHandler = (e,index)=>{
  const copytask = [...Task];
  copytask.splice(index,1);
  setTask(copytask);
 }
 const EditHandler = (e,index)=>{
  const copytask = [...Task];
  copytask[index].title = title;
  setTask(copytask);
 }

  if(Task.length>0){
    rendertasks = Task.map((task,index)=>{
       return <li key={index} className="mb-5 flex justify-between items-center border rounded-xl p-5">
                  <div className="flex items-center">
                      <div onClick={(e)=> CompleteHandler(e,index)} 
                      className={`${task.completed ? "bg-green-400" : "border"} mr-4 rounded-full w-[30px] h-[30px] border-orange-600`}>

                      </div>
                      <h1 className={`${task.completed ? "line-through" : ""} text-2xl font-extrabold text-yellow-100`}>
                          {task.title}
                      </h1>
                  </div>
                  <div className="flex gap-3 text-2xl text-yellow-100">
                      <i onClick={(e)=>EditHandler(e,index)} className="ri-file-edit-line"></i>
                      <i onClick={(e)=>DeleteHandler(e,index)} className="ri-delete-bin-3-line"></i>
                  </div>
              </li>
    })
  }
  return (
      <div className=" border-t-2 w-screen bg-zinc-800 flex min-h-screen items-center flex-col">
          <div className="mt-[7%] w-[25%] h-[20%] border rounded-3xl flex justify-around items-center">
              <div className="text-yellow-100">
                  <h1 className="text-3xl font-bold">LETS TODO</h1>
                  <p>Keeps doing things</p>
              </div>
              <div className="text-4xl font-extrabold flex justify-center items-center w-[120px] h-[120px] rounded-full bg-orange-600">
                  {Task.filter((task)=>task.completed).length}/{Task.length}
              </div>
          </div>
          {/*  */}
          <form onSubmit={submitHandler} className="w-[25%] flex justify-between px-5 my-[2%]">
              <input
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                  placeholder="write your next task..."
                  className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
                  type="text"
              />
              <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">
                  <i className="ri-add-fill font-light"></i>
              </button>
          </form>
          
            {rendertasks}
      </div>
  );
};

export default App;
