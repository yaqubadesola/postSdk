import Typicode from "@yaqubadesola/sdkdemo";
const client = new Typicode({
  apiKey: "123",
});

client.getPosts().then((p) => console.log("posts = ", p));
