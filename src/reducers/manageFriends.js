export function manageFriends(state, action){
    switch(action.type){

        case("ADD_FRIEND"):
            if(state.friends.length == 0){
                return {friends: [action.friend]}
            }
            else
                return {friends: [...state.friends,action.friend]}   
        
        case("REMOVE_FRIEND"):
            let friend = state.friends.find(friend=>{
                return friend.id === action.id
            })
            console.log("State Friend", friend)
                let index = state.friends.indexOf(friend)
                let newArray = state.friends
                newArray.splice(index,1)
                return {friends: newArray}

        default:
            return state
    }

}
