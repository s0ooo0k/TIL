async function fetchGitHubIssues() {
  const repoOwner = "s0ooo0k";
  const repoName = "TIL";
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch issues");
    }

    const issues = await response.json();
    const issueContainer = document.getElementById("issues-container");

    issues.forEach((issue) => {
      const issueCard = document.createElement("div");
      issueCard.classList.add("card", "mb-3");

      issueCard.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">
              <a href="issue.html?issueId=${issue.number}" class="text-decoration-none">
                📝 ${issue.title}
              </a>
            </h5>
          </div>
        `;

      issueContainer.appendChild(issueCard);
    });
  } catch (error) {
    console.error("Error fetching issues:", error);
    const issueContainer = document.getElementById("issues-container");
    issueContainer.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Failed to fetch issues. Please try again later.
        </div>
      `;
  }
}

document.addEventListener("DOMContentLoaded", fetchGitHubIssues);
