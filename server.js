// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const fs = require("fs");
const json = JSON.stringify({
  cardList: [
    {
      id: "14338b17-e40d-4bf2-a8cb-a0929bc42fcd",
      name: "test 4",
      videoURL: "https://www.youtube.com/watch?v=UUga4-z7b6s",
      bucketId: "mainList",
    },
    {
      id: "d83ec70d-cf92-4883-8578-7b47ef2d6be8",
      name: "   20:46 / 23:48   Health Anxiety - Standup Comedy by Abhishek Upmanyu (Full Special on YT)",
      videoURL: "https://www.youtube.com/watch?v=_fWyWcZB7VA",
      bucketId: "mainList",
    },
    {
      id: "2f9740d8-6e80-402b-ae51-555da0c23aed",
      name: "Fun With The Comedians | Zakir, Abhishek, Anubhav | Ep 292| The Kapil Sharma Show | New Full Episode",
      videoURL: "https://www.youtube.com/watch?v=IyMdcXl4vag",
      bucketId: "mainList",
    },
    {
      id: "fc1a30e4-1557-4c8f-99e6-74c889b2415b",
      name: "How To Get High Paying Jobs In Any Company? | Tanay Pratap | Josh Talks",
      videoURL: "https://www.youtube.com/watch?v=6RMz9HoGnY0",
      bucketId: "mainList",
    },
    {
      id: "ada6fe53-5e81-44d0-8557-e1e6486213f3",
      name: "Hanuman chalisa super fast voice 7time repeat",
      videoURL: "https://www.youtube.com/watch?v=hZHQmPXnQbM",
      bucketId: "mainList",
    },
    {
      id: "d6b798cd-c901-4aed-b505-a7522b0f17c0",
      name: "PITAI REVIEW 4 Feat. @AnubhavSinghBassi",
      videoURL: "https://www.youtube.com/watch?v=rgpc0DOOchg",
      bucketId: "mainList",
    },
    {
      id: "e4588814-6573-47f3-b24f-d95007f9317c",
      name: "MUMMY PAPA PITAI REVIEW #3",
      videoURL: "https://www.youtube.com/watch?v=5XAUNRX0Oi4",
      bucketId: "mainList",
    },
    {
      id: "e6ff2a73-e0dd-409c-a5ad-e31c440e2d32",
      name: "Cursed Mountain of Uttarakhand || Shaapit Pahadi ||",
      videoURL: "https://www.youtube.com/watch?v=tEqmBmuGDD4&t=2s",
      bucketId: "mainList",
    },
    {
      id: "b1e76e47-2ae9-40eb-80d1-b4586246d717",
      name: "test not 4",
      videoURL: "https://www.youtube.com/watch?v=cGAdC4A5fF4",
      bucketId: "mainList",
    },
    {
      id: "b74a6b8a-f7e9-4644-869b-418547b626b5",
      name: "abc123",
      videoURL: "https://www.youtube.com/watch?v=nAULsoAQn2g",
      bucketId: "mainList",
    },
    {
      id: "503a5a04-5c57-4386-9f79-66d3a2f8d526",
      name: "new card added",
      videoURL: "https://www.youtube.com/watch?v=UUga4-z7b6s",
      bucketId: "mainList",
    },
  ],
});
fs.writeFile("db.json", json, "utf8", (err, data) => {
  console.log(err, data);
});

server.use(middlewares);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
