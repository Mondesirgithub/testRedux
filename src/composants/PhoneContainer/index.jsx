import React, { useState } from 'react'
import phone from '../../images/phone.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { buy_phone } from '../../redux/phone/actionPhone'

const PhoneContainer = props => {
  //plus facile que le Connect HOC
  const phones = useSelector(state => state.phone.phones >= 1 ? state.phone.phones : props.attention) 
  const dispatch = useDispatch()
 
  const [number, setNumber] = useState(1)
  const handlerNumber = e => {
    setNumber(e.target.value)
  }

  return (
    <div className='container'>
        <img src={phone} alt='phone' width={100} height={100}/>
        <p>
            Disponibilité: <span id='count'>{phones}</span>
        </p>
        <div className='btnContainer'>
          <button onClick={() => dispatch(buy_phone(number))}>Acheter</button>
          <input type="text" value={number} onChange={handlerNumber} style={{width: '20px', height: '30px'}} />
        </div>
    </div>
  )
}


export default PhoneContainer


// import React from 'react'
// import phone from '../../images/phone.jpg'
// import { connect } from 'react-redux'
// import { buy_phone } from '../../redux/phone/actionPhone'

// const PhoneComponent = (props) => {
//   return (
//     <div className='container'>
//         <img src={phone} alt='phone' />
//         <p>
//             Disponibilité: <span id='count'>{props.phones}</span>
//         </p>
//         <button onClick={() => props.buy_phone()}>Acheter</button>
//     </div>
//   )
// }

// const mapStateToProps = (state , ownProps) => {

//     return {
//         phones : state.phones > 0 ? state.phones : ownProps.attention
//     }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     buy_phone: () => dispatch(buy_phone())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent)