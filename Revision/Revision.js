class Heap{

    constructor(){
        this.heap=[];
    }

    parent(i){
        return Math.floor((i-1)/2);
    }

    left(i){
        return (i*2)+1
    }

    right(i){
        return (i*2)+2;
    }

    insert(val){
        this.heap.push(val);
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        
        while(i>0 && this.heap[this.parent(i)]>this.heap[i]){
           p = this.parent(i);
           [this.heap[p],this.heap[i]] =  [this.heap[i], this.heap[p]] 
           i=p;
        }
    }

    bubbleDown(index){
        let n = this.h.length;
        while(true){
            let smallest = i;

            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.h[smallest] > this.h[l]) smallest = l;
            if (r < n && this.h[smallest] > this.h[r]) smallest = r;

            if (smallest == i) break;

            [this.h[smallest], this.h[i]] = [this.h[i], this.h[smallest]]
            i = smallest;
        }
    }

    extractMin(){
        if(!this.heap.length)return null;
         if(this.heap.length==1)return this.heap.pop();

         let min = this.heap[0];
         this.heap[0] = this.heap.pop();
         this.bubbleDown(0)
         return min
    }

     size() {
        return this.h.length;
    }

    getMin() {
        return this.h[0];
    }
}

