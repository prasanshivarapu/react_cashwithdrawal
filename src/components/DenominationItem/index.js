// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const getting = () => {
    updateBalance(value)
  }
  return (
    <div>
      <button className="button" type="button" onClick={getting}>
        {value}
      </button>
    </div>
  )
}

export default DenominationItem
