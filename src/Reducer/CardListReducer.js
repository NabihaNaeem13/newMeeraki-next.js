const CardListReducer=(state,action)=>{
    switch(action.type){
        case "SET_Card_LOADING":
            return{
                ...state,
                CardLoading:true
            };
            case "SET_API_DATA":
              return{
                ...state,
                CardLoading:false,
                Card_list:action.payload,
              }
            case "API_ERROR":
                return{
                    ...state,
                    CardLoading:true,
                    isError:true
                };
            }
           
            
}
export default CardListReducer;