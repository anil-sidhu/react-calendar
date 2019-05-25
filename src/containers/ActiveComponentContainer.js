import { connect } from 'react-redux'
import ActiveComponent from '../component/ActiveComponent'
 import { bookingData } from '../actions/index'
const mapStateToProps = state => ({
  
})
 
const mapDispatchToProps = dispatch => ({
  bookingData: (data) => dispatch(bookingData(data))
})
 
const ActiveComponentContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveComponent)

export default ActiveComponentContainer;