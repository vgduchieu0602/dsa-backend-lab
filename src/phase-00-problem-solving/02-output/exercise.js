const responseTimes = [120, 80, 450, 200]

function countSlowRequest(times) {
    let count = 0

    for (const time of times) {
        if (time > 150) {
            count++
        }
    }

    return count
}

const result = countSlowRequest(responseTimes)

console.log("Input:", responseTimes)
console.log("Output:", result)
console.log("Output type:", typeof result)