const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hompage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}`;
      }
      return `Hello, ${name}`;
      // return 'Halaman tidak ditemukan'
    },
  },
  {
    method: "POST",
    path: "/user",
    hadnl: (request, h) => {
      return h.response("created").code(201);
    },
  },
];

module.exports = routes;

// const handler = (request, h) => {
//     const response = h.response('success');
//     response.type('text/plain');
//     response.header('X-Custom', 'some-value');
//     return response;
// };
 
// // Chained notation
// const handler = (request, h) => {
//     return h.response('success')
//         .type('text/plain')
//         .header('X-Custom', 'some-value');
// };