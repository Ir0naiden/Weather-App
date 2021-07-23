const dateBuilder = (i) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[i.getDay()];
    let date = i.getDate();
    let month = months[i.getMonth()];
    let year = i.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }

  export default dateBuilder;