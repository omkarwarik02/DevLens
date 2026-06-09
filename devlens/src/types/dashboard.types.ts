 export interface DashboardState {
  code: string
  language: string
  isLoading: boolean
  aiReview: string
  error: string
}

export type DashboardAction =
| {type:"SET_CODE"; payload:string}
| {type:"SET_LANGUAGE"; payload:string}
| {type:"REVIEW_START"}
| {type:"REVIEW_SUCCESS"; payload:string}
| {type:"REVIEW_ERROR"; payload:string}


