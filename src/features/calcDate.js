export default function calcDate(date) {
    const jobBorn = new Date(date);
    const timeNow = new Date();
    const jobDays = Math.floor((timeNow - jobBorn) / 86400000);
    const jobHours = Math.floor((timeNow - jobBorn) / 3600000);

    if (jobDays > 0) {
        if (jobDays > 10 && jobDays < 15)
            return `${jobDays} дней`
        switch (jobDays%10) {
            case 1: return `${jobDays} день`
            case 2: 
            case 3: 
            case 4: 
                return `${jobDays} дня`
            default: return `${jobDays} дней`
        }
    }            
    else {
        if (jobHours > 10 && jobHours < 15){
            return `${jobHours} часов`
        }
        switch (jobHours%10) {
            case 1: return `${jobHours} час`
            case 2: 
            case 3: 
            case 4: 
                return `${jobHours} часа`
            default: return `${jobHours} часов`
        }
    }
}