/*
Minimum number of platforms required for a railway

Problem Statement: We are given two arrays that represent the arrival and departure times of trains that stop at the platform. We need to find the minimum number of platforms needed at the railway station so that no train has to wait

Note: Time intervals are in the 24-hour format (HHMM) , where the first two characters represent hour (between 00 to 23 ) and the last two characters represent minutes (this will be <= 59 and >= 0). Leading zeros for hours less than 10 are optional (e.g., 0900 is the same as 900).
*/

let arr = [1000, 935, 1100], dep = [1200, 1240, 1130]


//Approach 1,  TC: O(n^2), SC: O(n)
function minPlatforms_1(arrival, departure) {
    const n = arrival.length;

    const trains = [];           // [arrivalTime, departureTime]
    const platformDepartureTimes = []; // stores departure time for each platform

    // Combine arrival & departure
    for (let i = 0; i < n; i++) {
        trains.push([arrival[i], departure[i]]);
    }

    // Sort by arrival time
    trains.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
        let platform = 0;
        const totalPlatforms = platformDepartureTimes.length;

        const currentArrival = trains[i][0];
        const currentDeparture = trains[i][1];

        // Try to reuse platform
        while (platform < totalPlatforms) {
            if (platformDepartureTimes[platform] <= currentArrival) {
                platformDepartureTimes[platform] = currentDeparture;
                break;
            }
            platform++;
        }

        // No platform available → create new
        if (platform >= totalPlatforms) {
            platformDepartureTimes.push(currentDeparture);
        }
    }

    return platformDepartureTimes.length;
}

console.log("Minimum Platforms", minPlatforms_1(arr, dep))



//Approach 2, TC: O(n log n), SC: O(1)
function minPlatforms_2(arrival, departure) {

    let n = arrival.length;

    arrival.sort((a, b) => (a - b));
    departure.sort((a, b) => a - b);

    let i = 1, j = 0, platNeed = 1, minPlat = 1;

    while (i < n && j < n) {
        if (arrival[i] <= departure[j]) {
            platNeed++;
            i++;
        }

        else if (arrival[i] > departure[j]) {
            platNeed--;
            j++;
        }

        minPlat = Math.max(platNeed, minPlat);
    }

    return minPlat;
}

console.log("Minimum Platforms", minPlatforms_2(arr, dep))


/*
APPROACH 2: Two Pointer (Optimal)

INTUITION:

We are NOT assigning platforms to trains.

Instead, we are answering:
👉 "At any moment, how many trains are present at the station together?"

Because:
- Each train at station → needs 1 platform
- Max trains at same time → answer

--------------------------------------------

IDEA:

Treat arrival & departure as EVENTS on timeline

- arrival  → +1 train (platform needed)
- departure → -1 train (platform freed)

--------------------------------------------

HOW?

1. Sort arrival[] and departure[] separately
   → So we can process events in time order

2. Use two pointers:
   i → next arrival
   j → next departure

3. Compare:
   - If next event is ARRIVAL:
        → arrival[i] <= departure[j]
        → one more train comes → platNeed++

   - Else (DEPARTURE happens first):
        → platform gets free → platNeed--

4. Track maximum platNeed
   → That is the answer

--------------------------------------------

KEY IDEA:
👉 This problem = Maximum overlapping intervals
*/