export default function getDayData(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
    const date = new Date()
    const currentHour = date.getHours()
    const day = date.getDate() >= 10 ? date.getDate() : Number('0'+ date.getDate())
    const dayName = days[date.getDay()]
    return [day,dayName,currentHour]
}