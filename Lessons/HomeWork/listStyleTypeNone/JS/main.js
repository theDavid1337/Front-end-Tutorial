function domContentName(a, b, c, d) {
    let helper_str = `${a}`
    for (let i = 0; i < b.length; i++) {
        if (i == 0) {
            helper_str += `${b[i].toUpperCase()}`
        } else {
            helper_str += `${b[i].toLowerCase()}`
        }
    }
    for (let i = 0; i < c.length; i++) {
        if (i == 0) {
            helper_str += `${c[i].toUpperCase()}`
        } else {
            helper_str += `${c[i].toLowerCase()}`
        }
    }
    for (let i = 0; i < d.length; i++) {
        if (i == 0) {
            helper_str += `${d[i].toUpperCase()}`
        } else {
            helper_str += `${d[i].toLowerCase()}`
        }
    }
    console.log(helper_str);
}
domContentName(prompt('First').toLowerCase(), prompt('Second').toLowerCase(), prompt('Third').toLowerCase(), prompt('Fourth').toLowerCase())

// liststyleTypeNone