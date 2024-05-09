import { execa } from "execa";
import getPort from "get-port";

export type Process = {
  stop(): Promise<void>;
  port: number;
};

export async function startProcess() {
  let port = await getPort(); // get a random post
  const abortController = new AbortController();

  // start the process with the database URL and generated port
  let server = execa(
    "npm",
    [
      "run",
      "preview",
      "--",
      "--port",
      port.toString(),
      "--site",
      `http://localhost:${port}`,
    ],
    {
      env: {
        CI: "true",
        NODE_ENV: "test",
      },
      cancelSignal: abortController.signal,
      stderr: "inherit",
    }
  );

  // here, we create a new promise, we'll expect for the stdout to receive
  // the message with the PORT our server generates once it starts listening
  return await new Promise<Process>(async (resolve, reject) => {
    server.catch((error) => reject(error));
    if (server.stdout === null) return reject("Failed to start server.");
    server.stdout.on("data", (stream: Buffer) => {
      // console.log(stream.toString("utf-8"));
      if (
        stream
          .toString("utf-8")
          .includes(`Local    http://localhost:${port.toString()}`)
      ) {
        console.log("Server started on port", port);
        console.log("http://localhost:" + port);
        return resolve({
          async stop() {
            if (server.killed) return;
            abortController.abort();
          },
          port,
        });
      }
    });
  });
}
