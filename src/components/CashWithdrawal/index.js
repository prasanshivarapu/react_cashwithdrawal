import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = id => {
    if (id === 1) {
      this.setState(prevState => ({balance: prevState.balance - 50}))
    } else if (id === 2) {
      this.setState(prevState => ({balance: prevState.balance - 100}))
    } else if (id === 3) {
      this.setState(prevState => ({balance: prevState.balance - 150}))
    } else {
      this.setState(prevState => ({balance: prevState.balance - 200}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="greet1">
        <div className="greet2">
          <div className="greet22">
            <h1 className="greet21">s</h1>
            <h1> Sarah Williams</h1>
          </div>
          <div className="greet23">
            <p>your balance</p>
            <div>
              <h1> {balance}</h1>
              <p> In rupees</p>
            </div>
          </div>
          <div className="greet33">
            <h1>Withdrawl</h1>
            <p>choose sum in rupees</p>
          </div>

          <div className="greet3">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
