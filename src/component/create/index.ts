const ad = '123';

const func = () => {

    return ad.split(' ').map(item => Number(item) * 2).join('')
};

console.log(func())