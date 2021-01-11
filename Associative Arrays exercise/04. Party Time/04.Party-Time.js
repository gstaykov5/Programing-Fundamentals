function solve(array) {
    array = array.toString().split(',PARTY,');
    const existingPeople = array.pop().split(',');
    array = array.toString().split(',');
    const list = {
        'VIP': [],
        'regular': []
    };

    array.forEach(ele => {
        const firstChar = ele[0];

        if (isNaN(firstChar)) {
            list['regular'].push(ele);
        } else {
            list['VIP'].push(ele);
        }
    });

    existingPeople.forEach(ele => {
        if (list['VIP'].includes(ele)) {
            let index = list['VIP'].indexOf(ele);
            list['VIP'].splice(index, 1);
        } else {
            let index = list['regular'].indexOf(ele);
            list['regular'].splice(index, 1);
        }
    });
    console.log(list['VIP'].length + list['regular'].length);
    console.log(list['VIP'].join('\n') + '\n' + list['regular'].join('\n'));

}s