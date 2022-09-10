export default function getDaysNames(index){
   
    const date = new Date()
    const dayNumber = date.getDay()
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const dayName = dayNames[(dayNumber+index+1)]

    return dayName
}