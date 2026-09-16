/*
Meeting Rooms II

Given two arrays start[] and end[] such that start[i] is the starting time of ith meeting and
end[i] is the ending time of ith meeting. Return the minimum number of rooms required to 
attend all meetings.

Note: A person can also attend a meeting if it's starting time is same as the previous
meeting's ending time.
*/

let start = [1, 10, 7], end = [4, 15, 10];

function meetingRoom_1(start,end){
    
    const meetings = start.map((s,i) => [s,end[i]]);
    let count = 1,j=0;
    
    meetings.sort((a,b) => {
        if(a[1]==b[1])  return a[0] - b[0];
        else return a[1]-b[1]
    });

    for(let i=1;i<meeting.length;i++){
        if(meetings[j][1]>meetings[i][0])count++;
        else j++;
    }

    return count

}

console.log("Meeting Room", meetingRoom_1(start,end))