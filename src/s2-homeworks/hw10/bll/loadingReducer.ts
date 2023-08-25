const initState = {
    isLoading: false,
}
export type StateType = {isLoading:boolean}

type ActionType = LoadingActionType
export const loadingReducer = (state:StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":{
            return {...state,isLoading:action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE_LOADING',
        isLoading
    } as const
}
