function this_is_madness_(){
    console.log('You chose death.')
    prompt('your fate decides on this question: Are you going to die? Y for yes, anything else for no.')
    this_is_demise_()
}
function this_is_demise_(){
    let arr = [];
    while (true) {
        arr.push(new Array(1000000).fill(0));
    }
    console.log(arr);
}