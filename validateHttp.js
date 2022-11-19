const axios = require('axios');

const validateHttp = (objectLinks) => {
    const links = objectLinks.map((link) => axios.get(link.href)
    .then((response) => {
        link.status = response.status;
        link.ok = `${response.statusText} Ok`;
        return link;
    })
    .catch((error) => {
        if (error.response) {
            link.status = error.response.status;
            link.ok = 'Fail';
            return link;
        }
        link.status = 'Server error';
        link.ok = 'Fail';
        return link;
    }));
    return Promise.all(links);
}

module.exports = { validateHttp,
};
