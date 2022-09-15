export default function getDayData(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"]; 
    const date = new Date()
    const currentHour = date.getHours()
    const day = date.getDate() >= 10 ? date.getDate() : Number('0'+ date.getDate())
    const dayName = days[date.getDay()]
    const monthName= monthNames[date.getMonth()]
    return [day,dayName,currentHour,monthName]
}