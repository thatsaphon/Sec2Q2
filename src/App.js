import "./App.css"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([])
  const [text, setText] = useState("")

  useEffect(function () {
    async function getData() {
      try {
        let response = await fetch("https://api.publicapis.org/categories")
        let data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    console.log("effect running")
  }, [])

  const handleTextChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <div className="">
        <div className="SearchBar">
          <input type="text" onChange={handleTextChange} />
        </div>
        <div className="Container">
          {data.map((item) =>
            item.toLowerCase().includes(text) ? (
              <div className="Box">{item}</div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default App
