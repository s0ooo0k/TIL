async function fetchIssueDetails(issueId) {
  const repoOwner = "s0ooo0k";
  const repoName = "TIL";
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues/${issueId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch issue details");
    }

    const issue = await response.json();

    // Populate page content
    document.getElementById("issue-title").textContent = issue.title;
    document.getElementById("issue-date").textContent = new Date(
      issue.created_at
    ).toLocaleString();

    // Convert Markdown to HTML using marked.js
    document.getElementById("issue-body").innerHTML = marked.parse(
      issue.body || "No description provided."
    );

    document.getElementById("github-link").href = issue.html_url;
  } catch (error) {
    console.error("Error fetching issue details:", error);
    document.body.innerHTML = `
        <div class="alert alert-danger text-center mt-5" role="alert">
          Failed to load issue details. Please try again later.
        </div>
      `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const issueId = params.get("issueId");
  if (issueId) {
    fetchIssueDetails(issueId);
  } else {
    alert("Invalid issue ID!");
  }
});
