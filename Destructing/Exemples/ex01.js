const parseURL = function (url) {
    let protocol;
    [protocol, url] = url.split('://');
    let [server, ...path] = url.split('/');

    return [protocol, server, path];
};

console.log(parseURL("https://willsolutions.com/fintech/aboutus"));