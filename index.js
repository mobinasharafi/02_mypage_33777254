// built in http to create the web server
// MyPage by Mobina Sharafi 


const http = require("http");
const port = 8000; 

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
              background-color: #e8e4e4ff;
            }
            h1 {
              color: #18131bff;
              font-size: 36px;
              margin-bottom: 10px;
            }
            h2 {
              font-weight: normal;
              color: #030202ff;
              margin-top: 0;
              margin-bottom: 25px;
            }
            h3 {
             font-size: 18px;
             color: #444;
             font-weight: normal;
             margin-top: 30px;
             }
  
             p {
              font-size: 18px;
              margin: 10px 0;
            }
            .quote {
              font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
              font-size: 20px;
              color: #18131bff;
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
          <p><b>Website Last updated:</b> October 24th, 2025, 9:13 AM</p>
          <h3>Quote of the Day:</h3>
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