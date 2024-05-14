import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

	async function fetchData(){
		let a = await fetch("https://jsonplaceholder.typicode.com/posts")
		let data = await a.json()
		setCards(data);
		console.log(data);
	}

  useEffect(function(){
	fetchData();
  }, [])

  return (
    <>
		<Navbar/>
		<div className="container">
			{cards.map(function(card){
				return (<div key={card.id} className="card">
						<h1>{card.title}</h1>
						<p>{card.body}</p>
						<span>By: User Id: {card.userId}</span>
					</div>)
			})}
		</div>
    </>
  )
}

export default App
