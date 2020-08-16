const initialState = {
    topNews: [],
    bestNews: [],
    newNews: [],
    SingleNews: []
  }
  
  export const mainReducer = (state = initialState, action) => {
    console.log('reducer')
    switch(action.type){
      case 'TOP_SHOW':
        console.log('inside reducer top show case')
        return {...state, topNews: action.payload}
      case 'TOP_UPDATE':
        console.log('inside reducer top case',action.payload)
        return {...state, topNews: action.payload}
      default:
        return state;
    }
  }
  