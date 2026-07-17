/**
 * Helper utility to commit files directly to GitHub using the REST API from the browser.
 */

interface GitHubCommitResponse {
  success: boolean;
  message: string;
}

/**
 * Commits content directly to GitHub via REST API
 * @param token GitHub Personal Access Token (PAT)
 * @param repo Repository in "owner/repo" format
 * @param filePath Path of the file in the repository (e.g., "src/data/blogs.json")
 * @param content String content to write to the file
 * @param commitMessage Commit message
 * @param branch Branch name (e.g., "main")
 */
export async function commitToGitHub(
  token: string,
  repo: string,
  filePath: string,
  content: string,
  commitMessage: string,
  branch: string = "main"
): Promise<GitHubCommitResponse> {
  // Clean repo input: extract "owner/repo" if a full GitHub URL is pasted
  let cleanRepo = repo.trim();
  if (cleanRepo.includes("github.com/")) {
    const parts = cleanRepo.split("github.com/");
    cleanRepo = parts[1];
  }
  // Remove leading/trailing slashes and any ".git" suffix
  cleanRepo = cleanRepo.replace(/^\/+|\/+$/g, "").replace(/\.git$/, "");

  const url = `https://api.github.com/repos/${cleanRepo}/contents/${filePath}`;
  
  try {
    // 1. Retrieve the file's current SHA (required by GitHub for updates)
    let sha: string | undefined = undefined;
    
    const getFileRes = await fetch(`${url}?ref=${branch}`, {
      method: "GET",
      headers: {
        "Authorization": `token ${token}`,
        "Accept": "application/vnd.github.v3+json"
      }
    });

    if (getFileRes.ok) {
      const fileData = await getFileRes.json();
      sha = fileData.sha;
    } else if (getFileRes.status !== 404) {
      // If error is not 404 (file not found), something else is wrong
      const errData = await getFileRes.json().catch(() => ({}));
      return {
        success: false,
        message: `Failed to fetch file SHA from GitHub: ${errData.message || getFileRes.statusText}`
      };
    }

    // 2. Commit the updated contents (must be base64 encoded)
    // Using unescape(encodeURIComponent(str)) to handle UTF-8 characters safely in btoa
    const base64Content = btoa(unescape(encodeURIComponent(content)));

    const body: any = {
      message: commitMessage,
      content: base64Content,
      branch: branch
    };

    if (sha) {
      body.sha = sha;
    }

    const commitRes = await fetch(url, {
      method: "PUT",
      headers: {
        "Authorization": `token ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json"
      },
      body: JSON.stringify(body)
    });

    if (commitRes.ok) {
      return {
        success: true,
        message: `Successfully committed to branch "${branch}" via GitHub API!`
      };
    } else {
      const errData = await commitRes.json().catch(() => ({}));
      return {
        success: false,
        message: `Commit failed: ${errData.message || commitRes.statusText}`
      };
    }

  } catch (error: any) {
    console.error("GitHub API Error:", error);
    return {
      success: false,
      message: `Network error connecting to GitHub: ${error.message || String(error)}`
    };
  }
}
