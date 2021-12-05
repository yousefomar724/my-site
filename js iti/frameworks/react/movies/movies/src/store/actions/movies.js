import axiosInstance from "../../network/axiosInterceptor";

// export const getMovies = (data)=>{
//     return {
//         type: 'GET_MOVIES',
//         payload: data
//     }
// }

const apiKey = 'b6613b84db5c06f5b219a2f74c791d29';

export const getMovies = () => (dispatch)=>{
    return axiosInstance.get(`/3/movie/popular?api_key=${apiKey}&page=1`)
    .then(res=> {
        dispatch({
        type: 'GET_MOVIES',
        payload: res.data.results
    })})
}