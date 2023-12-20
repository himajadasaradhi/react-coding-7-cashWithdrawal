// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, onChangeBalance} = props
  const {value} = denominationsList
  const onChangeDenomination = () => {
    onChangeBalance(value)
  }
  return (
    <li className="list">
      <button type="button" onClick={onChangeDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
