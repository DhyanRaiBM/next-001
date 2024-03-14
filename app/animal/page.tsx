"use client"

import { generateTask, getTasks } from "@/util/db";
import { FormEvent, useEffect, useState } from "react";

type Props = {}
const Page = (props: Props) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;
    const createdTask:TaskType = await generateTask(task);
    setTasks([...tasks, createdTask]);
    setTask(""); // Clear input field after submission
  };

  useEffect(()=>{
    async function fetchData(){
      const data=await getTasks();
      if(data?.length >0){
        setTasks(data);
      }
      return;
    }

    fetchData();
  },[])

  return (
    <div>
      <form className="m-3" onSubmit={handleSubmit}>
      <input type="text" value={task} required placeholder="Type here"  onChange={(e)=>setTask(e.target.value)} className="input input-bordered input-info w-full max-w-xs text-white" />
      <button className="btn btn-secondary mx-3" >Add Task</button>
      </form>
      <div>
        {
          tasks.map((task)=>(
            <h1 key={task.id} className="mt-4" >{task.name}</h1>
          ))
        }
      </div>
    </div>
  )
}
export default Page