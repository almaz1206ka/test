const a = 1;
const b = 3;


const c = 5;
const d = {
    a,
    b
}


const r = {
    a,
    b
}

const x = 1 + 1;
const e = {
    r,
    d,
    c,
    a,
    b
}

const p = {...e, ...r};

console.log(p)