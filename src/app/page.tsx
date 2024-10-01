import Image from 'next/image'
import styles from './page.module.css'
import { InputText } from "primereact/inputtext";
import TodoList from './components/TodoList';


export default function Home() {

  return (
    <>
      <h1>To Do List with nextjs-13 and prime-react</h1>
      <TodoList />
    </>
  )
}
