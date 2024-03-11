const SMTPServer = require("smtp-server").SMTPServer;

// Create SMTP server instance
const server = new SMTPServer({
  // Options
  logger: true, // Enable logging
  onData(stream, session, callback) {
    // Handle incoming emails here
    stream.pipe(process.stdout); // Log email data to console
    stream.on("end", callback);
  },
});

// Start the server
server.listen(2550, "0.0.0.0", () => {
  console.log("SMTP server listening on port 2550");
});

// Error handling
server.on("error", (err) => {
  console.error("SMTP server error:", err);
});
