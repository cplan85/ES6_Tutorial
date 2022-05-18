const first = {name: "Mosh"};

const second = {job: "Instructor"};

const combined = {...first, ...second, location: "Australia"};

const clone = {...first};
console.log(combined);
