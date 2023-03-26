import React,{ useState } from 'react'
import tablet from '../../images/tablet.webp'
import { useSelector , useDispatch } from 'react-redux'
import { buy_tv } from '../../redux/tv/actionTv'


const TvContainer = props => {
  const tv = useSelector(state => state.television.tv >= 1 ? state.television.tv : props.attention)
  const dispatch = useDispatch()
  const [number, setNumber] = useState(1)
  const handlerNumber = e => {
    setNumber(e.target.value)
  }

  return (
    <div className='container'>
        <img src={tablet} alt='tv' width={100} height={100} />
        <p>
            Disponibilité 
            <span id='count'>{tv}</span>
        </p>
        <div className='btnContainer'>
          <button onClick={() => dispatch(buy_tv(number))}>Acheter</button>
          <input type="text" value={number} onChange={handlerNumber} style={{width: '20px', height: '30px'}}/>
        </div>
    </div>
  )
}

export default TvContainer