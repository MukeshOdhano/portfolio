export default class Animation{
   static animations = new Animation();

   fadeInScreen = (screen_Name)=>{
      let screen = document.getElementById(screen_Name);
      if(!screen || screen_Name) return; 

      screen.style.opacity = "5";
      screen.style.transform = `translateY(1px)`
   }
}