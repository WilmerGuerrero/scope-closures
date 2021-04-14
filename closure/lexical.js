const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
}