export const depositeMoney = () =>{
    return (dispatch) =>{
        dispatch({

            type: 'deposit',
            payload: amount
    })
    }
}


export const withdrawMoney = () =>{
    return (dispatch) =>{
        dispatch({

            type: 'withdraw',
            payload: amount
    })
    }
    
}