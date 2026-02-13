import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'


function App() {

  return (
    <>
      <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[3, 4, 5, 6]} />
    </>
  );
}
export default App
