import { connect } from 'react-redux'

function Title(props) {
  console.log('render>', props)
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={props.onChangeTitle} />
      </div>
      <p>{props.title}</p>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
    title: state.title,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeTitle: (e) => {
      const value = e.target.value
      console.log('title changed')
      const action = { type: 'TITLE', value: value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
