const { predictHandler, getPredictionHistoriesHandler } = require('../server/handler');
 
const routes = [
  {
      path: '/predict',
      method: 'POST',
      handler: predictHandler,
      options: {
          payload: {
              allow: 'multipart/form-data',
              multipart: true,
              maxBytes: 1_000_000 
          }
      }
  },
  {
      path: '/predict/histories',
      method: 'GET',
      handler: getPredictionHistoriesHandler
  }
];

module.exports = routes;