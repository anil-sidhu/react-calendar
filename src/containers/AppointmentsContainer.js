import { connect } from 'react-redux'
import Appointments from '../component/Appointments'
 
const mapStateToProps = state => ({
  bookingData: state.reduce.Booking
})
 
const mapDispatchToProps = dispatch => ({
   
})
 
const AppointmentsContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments)

export default AppointmentsContainer;