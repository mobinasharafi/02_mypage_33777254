// built in http to create the web server
// MyPage by Mobina Sharafi 


const http = require("http");
const port = 5000; // changed the port to 3000 because the web page wasn't responding and this is what AI suggested

http.createServer((req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    const today = new Date().toLocaleDateString();
    const quote = "“All suffering originates from craving, from attachment, from desire.” -Fyodor Dostoevsky";

    res.end(`
      <html>
        <head>
          <title>My Page</title>
          <style>
            body {
              font-family: Georgia, serif;
              text-align: center;
              margin-top: 60px;
              color: #060606ff;
              background-color: #e0d7d7ff;
            }
            h1 {
              color: #1c1620ff;
              font-size: 36px;
              margin-bottom: 10px;
            }
            h2 {
              font-weight: normal;
              color: #302f2fff;
              margin-top: 0;
              margin-bottom: 25px;
            }
            p {
              font-size: 18px;
              margin: 10px 0;
            }
            .quote {
              font-family: "Georgia", "Times New Roman", serif;
              font-size: 20px;
              color: #35263eff;
              margin-top: 25px;
              font-style: italic;
            }
          </style>
        </head>
        <body>
          <h1>Mobina Sharafi</h1>
          <h2>Dynamic Web Applications Labs</h2>
          <p>My first web app built with Node.js.</p>
          <p><b>Today's Date:</b> ${today}</p>
          <p class="quote">${quote}</p>
        </body>
      </html>
    `);
  } catch (err) {
    console.error("Request error:", err);
    res.statusCode = 500;
    res.end("Server error");
  }
}).listen(port, () => {
  console.log("Server running on port " + port);
});