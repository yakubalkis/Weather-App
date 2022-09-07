export default function getDays(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
    const date = new Date()
    const day = date.getDate() >= 10 ? date.getDate() : '0'+ date.getDate()
    const dayName = days[date.getDay()]
    return [day,dayName]
}