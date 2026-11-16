export function debounce(fn, delay) {
    let timer;
    const cancel = () => clearTimeout(timer);
    const run = (...args) => {
        cancel();
        timer = setTimeout(() => fn(...args), delay);
    };
    return Object.assign(run, { cancel });
}
