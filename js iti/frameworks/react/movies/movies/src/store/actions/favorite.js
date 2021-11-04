const favMovie = (data)=>{
    return {
        type: 'SET_FAVORITE',
        payload: data
    }
}

export default favMovie;