import React from 'react'
import {Link} from 'react-router-dom'

const PackageCard = (props) => {
  const {pack, handle, role} = props

  const buyButton = (pack) => {
    // getPackage(handle, packID)
    return(
        <Link to={{ 
            pathname:'/checkout',
            state: {pack: pack, handle: handle}
        }}> <button>Buy Now</button> </Link>
    )
}

    return (
      <div className="card">
        <div className="purchase">
          {role==='Owner' || role==='Visitor' ? buyButton(pack) : null}
          {/* {role=='Owner' || role=='Visitor' ? buyButton(pack) : null} */}
        </div>
        <div className="row">
          <div className="col-left">
            <p>package title: </p>
          </div>
          <div className="col-right">
            <p>{pack.title}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p>description: </p>
          </div>
          <div className="col-right">
            <p>{pack.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p># of sessions:</p>
          </div>
          <div className="col-right">
            <p>{pack.numberOfSessions}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p>price:</p>
          </div>
          <div className="col-right">
            <p>{pack.price}</p>
          </div>
        </div>
      </div>
    )
};
export default PackageCard