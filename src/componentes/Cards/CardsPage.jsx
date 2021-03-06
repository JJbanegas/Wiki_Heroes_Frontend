//import './CardsPage.css'
import React, {useEffect, useState} from 'react';
//import Form from './components/Forms/Form'
import CardList from './CardsList'
import axios from 'axios';

function CardsPage() {

  const [pj, setPj] = useState([])

  function addNewProfile(item){
    setPj(item)
  }



  const getAllHeroes = async () =>{
    const order = await localStorage.getItem("x-access-token")
    if(order){
    const response = await axios.get(`http://localhost:8080/api/heroes`)
    addNewProfile(response.data)
    }
  }

  useEffect(() =>{
    getAllHeroes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return(
    <div>
      <div className="header">Heroes</div>
        <CardList data = {pj}/>
    </div>
  )
}

export default CardsPage