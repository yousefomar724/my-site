const addToFav = (data)=>{
    return {
        type: 'ADD_FAVORITE',
        payload: data
    }
}

export default addToFav;