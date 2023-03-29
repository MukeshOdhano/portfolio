import Home from '../components/home/Profile'

export const TOTAL_SCRN = [
   {
      screen_Name: "Home",
      component: Home,
   },
   {
      screen_Name: ''
   }
]

export const GET_SCRN_INDEX = screen_Name => {
   if(!screen_Name) return -1
   
   for(let i = 0; i < TOTAL_SCRN.length; i++){
      if(TOTAL_SCRN[i].screen_Name === screen_Name) return i
   }
}