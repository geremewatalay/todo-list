
import "./styles.css"


function App() {
  const [count, setCount] = useState(0)

  return <form className="new-item-form">
    <div>
      <label htmlFor="item">New Item</label>
      <input type="text" id=""/>
    </div>
    <button className="btn">Add</button>
  </form>
}

export default App
