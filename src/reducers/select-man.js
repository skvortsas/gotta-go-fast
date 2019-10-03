export default function (state=null, action) {
    switch(action.type){
        case 'Character_selected':
            return action.payload;
            default:
                return state
    }
}