exports.getDay = ()=>{

    const today = new Date();

    const option = {
        weekday: 'long',
    }
    
   return today.toLocaleDateString("en-US", option)

}


exports.getDate = ()=>{

    const today = new Date();

    const option = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }

    return today.toLocaleDateString("en-US", option)

}
