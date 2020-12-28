function solve(data, inputMertic, outputMetric) {
    data = Number(data);

    if (inputMertic === 'mm') {
        data = data / 1000;
    } else if (inputMertic === 'cm') {
        data = data / 100;
    }

    if (outputMetric === 'mm') {
        data = data * 1000;
    } else if (outputMetric === 'cm') {
        data = data * 100;
    }
    console.log(data.toFixed(3));
}