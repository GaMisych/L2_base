function solution(str){
    if (str.length % 2 !== 0) str += "_"
    const reult = []
    for (let i = 0; i < str.length; i += 2) reult.push(str.slice(i, i + 2))
    return reult
}
