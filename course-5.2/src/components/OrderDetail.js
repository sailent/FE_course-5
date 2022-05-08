export default function OrderDetail(props) {
  return (
    <div className="order-detail" key={props.id}>
      <p>
        <b>{props.productName}</b>
      </p>
      <p>price: {props.price}$</p>
      <p>quantity: {props.quantity}</p>
      <button
        type="button"
        className="addButton"
        onClick={props.IncrementQuantityWithPrice}
      >
        +
      </button>
      <button
        type="button"
        className="removeButton"
        onClick={props.DecrementQuantityWithPrice}
      >
        -
      </button>
    </div>
  )
}
