export default function getCurrentDate(){
    let currentDate = new Date();
    let year = currentDate.getFullYear(); 
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate(); 
    let hours = currentDate.getHours(); 
    let minutes = currentDate.getMinutes(); 
    /* let seconds = currentDate.getSeconds(); */ 
    let creationTimestamp = day + "/" + month + "/" + year + " - " + 
    String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0');

    return creationTimestamp;
}