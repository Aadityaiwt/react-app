//import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function btnClick() {
  console.log("Button was Clicked");
}


function App() {

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="text"  size='small' onClick={btnClick}>type text</Button> <br />
      <Button variant="contained" onClick={btnClick} disabled>type daisables</Button> <br />
      <Button variant="contained" size='medium'  onClick={btnClick}>type contained</Button> <br />
      <Button variant="outlined" color='error' size='large' startIcon={<DeleteIcon />} onClick={btnClick}>type outlined</Button>

      </>
  )
}

export default App;