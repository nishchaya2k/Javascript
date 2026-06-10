/*
Problem Statement: You are given a list of tasks represented by uppercase English letters ('A' to 'Z'), and an integer n representing a cooldown interval between two same tasks. Each task takes exactly 1 CPU interval to complete. Tasks can be executed in any order, but identical tasks must be separated by at least n intervals, during which the CPU may remain idle or execute other tasks.
Return the minimum number of CPU intervals required to complete all the tasks .
*/

let tasks = ["A", "A", "A", "B", "B", "B"], n = 2;

//Approach 1, TC: O(N log K) (k unique Task), SC:O(K)
function taskSchedule_1(tasks, n) {
    // Step 1: Count frequency of each task
    let freq = new Map();
    for (let task of tasks) {
        freq.set(task, (freq.get(task) || 0) + 1);
    }

    // Step 2: Convert values to max-heap (simulated using array and sort)
    let maxHeap = Array.from(freq.values());
    maxHeap.sort((a, b) => b - a);

    // Total time required
    let time = 0;

    // Step 3: Process tasks in cycles of size (n + 1)
    while (maxHeap.length > 0) {

        // Temporary list to hold current cycle tasks
        let temp = [];

        // Set cycle size as cooldown + 1
        let cycle = n + 1;

        // Run up to (n+1) tasks or until heap is empty
        let i = 0;
        while (i < cycle && maxHeap.length > 0) {

            // Get the task with highest frequency
            let count = maxHeap.shift();

            // Decrease since task used once
            count--;

            // If still remains, add to temp for next round
            if (count > 0) {
                temp.push(count);
            }

            // Count this unit of time
            time++;
            i++;
        }

        // Step 4: Push remaining tasks back into maxHeap
        maxHeap = maxHeap.concat(temp);

        // Re-sort maxHeap to simulate priority queue
        maxHeap.sort((a, b) => b - a);

        // Step 5: Add idle time if heap still has tasks
        if (maxHeap.length > 0) {
            time += (cycle - i);
        }
    }

    // Return total time taken
    return time;
}

console.log("Task Schedule", taskSchedule_1(tasks, n))



/*
1. First count frequency of all tasks.

2. Use a **Priority Queue (Max Heap)** to always pick the task with highest remaining frequency.
   * Usecase: helps us execute the “most problematic” task first.
  
3. After executing a task, it cannot be used immediately because of cooldown.

4. So put that task into a **Queue** with the time when it becomes available again.
   * Usecase: tracks tasks currently in cooldown.
  
5. At every CPU interval:
   * pick task from max heap if available
   * execute it
   * decrease its count
   
6. If task still remains, push it into cooldown queue.

7. When cooldown time finishes, move task back from queue → max heap.

8. Continue until both heap and queue become empty.
*/