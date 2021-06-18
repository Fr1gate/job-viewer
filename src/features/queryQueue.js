//we need it in case if earlier request resolves after
//the last one
const queryQueue = {
    queue: [],

    pushToQueue(id) {
        this.queue.push({
            id: id,
            expired: false
        });
    },

    queryReady(id) {
        let key = this.queue.findIndex(queueElement => queueElement.id === id);
        let isExpired = this.queue[key].expired === true;
        this.queue.splice(key, 1);
        if (isExpired)
            return false;
        
        if (key > 0) {
            for (let i = 0; i < key; i++) {
                this.queue[i].expired = true;
            }
        }
        
        return true;
    },
    
}

export default queryQueue;