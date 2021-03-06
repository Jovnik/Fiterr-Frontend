import React, {useContext} from 'react';
import  {injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement} from 'react-stripe-elements';
import './MyCardElement.scss'
import AuthState from '../../context/auth/authContext'
import {Link} from 'react-router-dom'
import PageState from '../../context/page/pageContext'



const CardSection = (props) => {
    
    const authState = useContext(AuthState)
    const pageState = useContext(PageState)
    const {user, isAuthenticated, loadUser} = authState
    const { buyPackage, lastCharge} = pageState
    console.log(props)

    const {pack, handle, number, stripe} = props   
    console.log(number)
    console.log('pack', pack)

    if(!isAuthenticated){
        loadUser()
    }
    
    const handleSubmit = async event => {
        event.preventDefault()
        let body = new FormData()
        
        const { token } = await stripe.createToken()
        let amount = Number(pack.price)*100
        amount.toString().replace('.', '')
        console.log(amount)
        
        const source = token.id
        const receipt_email = user.email
        body.append('amount', amount)
        body.append('source', source)
        body.append('receipt_email', receipt_email)
        console.log(body)

        buyPackage(handle, pack._id, body)
  }
  if (lastCharge) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={lastCharge.receipt_url}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    )
  }
  return (
    <div className="checkout-form">
      <p>Amount: ${pack.price}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Card details
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCVCElement />
        </label>
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  )
}

export default injectStripe(CardSection)