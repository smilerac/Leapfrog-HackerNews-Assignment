const initialState = {
    topNews: [],
    bestNews: [],
    newNews: [],
    singleNews: []
  }
  
  export const mainReducer = (state = initialState, action) => {
    console.log('reducer')
    switch(action.type){
      // case 'TOP_SHOW':
      //   // console.log('inside reducer top show case')
      //   return {...state, topNews: action.payload}
      case 'TOP_UPDATE':
        // console.log('inside reducer top case',action.payload)
        return {...state, topNews: action.payload}

      case 'NEW_UPDATE':
        // console.log('inside reducer top case',action.payload)
        return {...state, newNews: action.payload}

      case 'BEST_UPDATE':
        // console.log('inside reducer top case',action.payload)
        return {...state, bestNews: action.payload}

      case 'EACH_UPDATE':
        // console.log('inside reducer each case',action.payload)
        // return {...state, singleNews: action.payload}
        return {...state, singleNews: [...state.singleNews, action.payload]}

      default:
        return state;
    }
  }
  