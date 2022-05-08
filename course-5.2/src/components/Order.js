import React from 'react'
import OrderDetail from './OrderDetail'

export default class Order extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      quantity: 0,
      details: [
        {
          id: 1,
          productName: 'Война и мир - Л.Н.Толстой',
          price: 800,
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Две жизни - К.Е.Антарова',
          price: 700,
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Разговор с богом - Н.Д.Уолша',
          price: 1000,
          quantity: 0,
        },
        {
          id: 4,
          productName: 'Хохот Шамана - В.П.Серкин',
          price: 600,
          quantity: 0,
        },
        {
          id: 5,
          productName: 'Хроники Ехо - Макс Фрай',
          price: 400,
          quantity: 0,
        },
      ],
    }
    this.IncrementQuantityWithPrice = this.IncrementQuantityWithPrice.bind(this)
  }

  IncrementQuantityWithPrice(index) {
    const { details } = this.state
    details[index].quantity += 1
    this.setState({ details })
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
      amount: prevState.amount + details[index].price,
    }))
  }

  DecrementQuantityWithPrice(index) {
    const { details } = this.state
    if (details[index].quantity) {
      details[index].quantity -= 1
      this.setState({ details })
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
        amount: prevState.amount - details[index].price,
      }))
    }
  }

  render() {
    const { details } = this.state
    return (
      <div className="order">
        {Object.keys(details).map((e) => (
          <OrderDetail
            key={details[e].id}
            productName={details[e].productName}
            price={details[e].price}
            quantity={details[e].quantity}
            IncrementQuantityWithPrice={() =>
              this.IncrementQuantityWithPrice(e)
            }
            DecrementQuantityWithPrice={() =>
              this.DecrementQuantityWithPrice(e)
            }
          />
        ))}
        <div className="clear" />
        <p className="total">
          Total Quantity : <b> {this.state.quantity}</b>
        </p>
        <p className="total">
          Total Price :<b> {this.state.amount}$ </b>
        </p>
      </div>
    )
  }
}
