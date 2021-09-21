const headQuarters=42
function distanceFromHqInBlocks(someValue) {
   if (someValue===50){
       return someValue-headQuarters;
   } else if(someValue===43){
       return someValue-headQuarters;
   } else if(someValue===34){
       return headQuarters-someValue;
   }
}
const feet=264;
function distanceFromHqInFeet(someValue) {
        if (someValue===50){
            return ((someValue-headQuarters)*feet);
        } else if(someValue===43){
            return ((someValue-headQuarters)*feet);
        } else if(someValue===34){
            return ((headQuarters-someValue)*feet);
        }
     }
    
     function distanceTravelledInFeet(someValue1,someValue2) {
            return Math.abs(someValue1-someValue2)*feet;
          }
          function calculatesFarePrice(someValue1,someValue2) {
             let totalFeet = distanceTravelledInFeet(someValue1,someValue2)
              if(totalFeet < 400){
                return 0
              } 
               else if(totalFeet > 400 && totalFeet < 2000){
                return (totalFeet-400)*.02;
            } 
            else if(totalFeet > 2000 && totalFeet < 2500){
                return 25
            } 
            else if(totalFeet > 2500){
                return 'cannot travel that far';
            }
         }
    