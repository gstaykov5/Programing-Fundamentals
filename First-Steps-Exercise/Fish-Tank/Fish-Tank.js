function solve(a, b, c, d) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);

    let volume = a * b * c;
    let totalLiters = volume * 0.001;
    let procente = d * 0.01;
    let final = totalLiters * (1 - procente);
    console.log(final);
}