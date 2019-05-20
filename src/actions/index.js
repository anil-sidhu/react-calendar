export const profile = () => (
    {
    type: 'Data',
    data: "profile status is changed new status",
  })

  export const bookingData = (data) => (dispatch: any) => {
      console.warn("data",data)
    setTimeout(() => {
          dispatch({
            type: "BOOKING",
            data:data
          })
    }, 500)
  }