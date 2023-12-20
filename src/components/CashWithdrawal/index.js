// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  onChangeBalance = value => {
    this.setState(prevState => ({
      Balance: prevState.Balance - value,
    }))
  }

  render() {
    const {Balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="container">
          <div className="name-round">
            <p className="round">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance-container">
              <p className="balance">
                {Balance}
                <br />
                <span>In Rupees</span>
              </p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unordered-list">
            {denominationsList.map(eachList => (
              <DenominationItem
                denominationsList={eachList}
                key={eachList.id}
                onChangeBalance={this.onChangeBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
