import AddNewTodo from "./add_new_todo"

export default function Home() {
  return (
    <div>
      <AddNewTodo/>
      <div>
        <ul>
          <li style={{padding:"5px 0"}}>Todo 1</li>
          <li style={{padding: "5px 0"}}>Todo 2</li>
          <li style={{padding:"5px 0"}}>Todo 3</li>
        </ul>
      </div>
    </div>    
  )
}
