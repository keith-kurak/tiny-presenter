// Local dev only — uses Node.js child_process, not available on EAS Hosting (Cloudflare Workers)
import { execFile } from "child_process";

// Allow letters, numbers, hyphens, underscores, slashes, dots — covers typical branch names
const SAFE_BRANCH = /^[a-zA-Z0-9._\-\/]+$/;

export async function POST(request: Request) {
  const body = await request.json();
  const { filePath, branch } = body as { filePath?: string; branch?: string };

  if (!filePath || !branch) {
    return Response.json(
      { error: "filePath and branch are required" },
      { status: 400 }
    );
  }

  if (!SAFE_BRANCH.test(branch)) {
    return Response.json({ error: "Invalid branch name" }, { status: 400 });
  }

  try {
    const output = await new Promise<string>((resolve, reject) => {
      // execFile avoids shell interpolation — args are passed directly
      execFile(
        "git",
        ["-C", filePath, "checkout", branch],
        (error, _stdout, stderr) => {
          if (error) {
            reject(new Error(stderr || error.message));
          } else {
            // git checkout writes to stderr on success ("Switched to branch '...'")
            resolve(stderr.trim());
          }
        }
      );
    });

    return Response.json({ success: true, output });
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
