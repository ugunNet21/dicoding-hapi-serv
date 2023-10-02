const Hapi = require("@hapi/hapi");

// Membuat server
const init = async () => {
  const server = Hapi.server({
    port: 3000, // Port yang akan digunakan oleh server
    host: "localhost", // Host yang akan digunakan
  });

  // Menambahkan rute sederhana
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Selamat datang di server Hapi!";
    },
  });

  // Menjalankan server
  await server.start();
  console.log("Server berjalan di", server.info.uri);
};

// Menjalankan fungsi init untuk memulai server
init();
