const axios = require('axios');

const validateHttp = (objectLinks) => {
  const validation = objectLinks.map((link) => {
    console.log('objeto link', link.flat());
		return axios.get(link.flat())
      .then((response) => {
        (link.status = response.status), (link.result = "Ok!");
        return link;
      })
      .catch((error) => {
        if (error.response) {
          link.status = error.response.status;
          link.ok = "Fail";
          return link;
        } else {
          link.status = "AQUI> Server error";
          link.ok = "AQUI>> Fail";
          return link;
        }
      });
  });
  return Promise.all(validation)
		.then(res => res)
};

module.exports = { validateHttp,
};
