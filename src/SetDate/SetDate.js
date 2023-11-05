


const set_Date = () => {
    const time = new Date().toTimeString().split(" ")[0]
    return new Date().toLocaleDateString().split(".").join("/") + `/ ${time}`
}

export default set_Date