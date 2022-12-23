// TASK 1

// let count = 3
// let array = [1, 2, 3]
// let helper_arr = []
// for (let i = 0; i < count; i++) {
//     array.forEach(elem => {
//         helper_arr.push(elem)
//     })
// }

// console.log(helper_arr);



// TASK 2

function checkAll(all) {
    let str = []
    let nums = []
    let bool = []
    let nulls = []
    let helper_arr = []
    all.forEach(elem => {
        if (typeof elem == 'string') {
            str.push(elem)
        } else if (typeof elem == 'number') {
            nums.push(elem)
        } else if (typeof elem == 'boolean') {
            bool.push(elem)
        } else if (typeof elem == 'object') {
            nulls.push(elem)
        }
    })
    if (str.length > nums.length || str.length > bool.length || str.length > nulls.length) {
        str.forEach(item => {
            helper_arr.push(item)
        })
    }
    if (nums.length > str.length || nums.length > bool.length || nums.length > nulls.length) {
        nums.forEach(item => {
            helper_arr.push(item)
        })
    }
    if (bool.length > nums.length || bool.length > str.length || bool.length > nulls.length) {
        bool.forEach(item => {
            helper_arr.push(item)
        })
    }
    if (nulls.length > nums.length || nulls.length > bool.length || nulls.length > str.length) {
        nulls.forEach(item => {
            helper_arr.push(item)
        })
    }
    console.log(helper_arr);
    console.log(`${str.length} - str\n${nums.length} - nums \n${bool.length} - bool \n${nulls.length} - nulls`);
}
let all = [1, 2, 3, null, true, false, true]
checkAll(all)