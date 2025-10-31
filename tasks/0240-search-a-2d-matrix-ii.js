/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    for (let row of matrix) {
        if (row[0] > target) break;
        if (row[row.length - 1] < target) continue;
        if (bs(row,target)) return true;
    }

    return false;
};

function bs (arr,target) {
    let start = 0;
    let end = arr.length - 1;
    if (arr[start] === target || arr[end] === target) return true;

    while (true) {
        const shot = start + Math.round((end - start) / 2);
        if (target < arr[shot])
            end = shot;
        else if (target > arr[shot])
            start = shot;
        else return true;

        if (start + 1 === end || start === end) return false
    }
}