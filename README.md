# GitHub Team Challenge: Build the Worst Startup

Your team has been hired to launch a website for a completely unnecessary startup. Unfortunately, management keeps changing its mind.

## Your mission

In a team of 3–4, use branches, commits, pull requests, and code reviews to improve the starter website. Every person must contribute from their own computer.

## Before starting

- Install Git and sign in to GitHub.
- Choose one person as the **Repo Lead**.
- Invent a team name and a ridiculous product.
- The Repo Lead creates the team fork. Everyone else clones that same fork.

## Round 1: Clone the project

Copy the URL of your team's fork, then run:

```bash
git clone YOUR_FORK_URL
cd git-github-team-challenge
```

## Round 2: Choose a role

Each person chooses a different role from [TASKS.md](TASKS.md). Create a branch before editing:

```bash
git switch -c feature/YOUR-NAME
```

When your change is ready:

```bash
git status
git add .
git commit -m "Describe what you changed"
git push -u origin feature/YOUR-NAME
```

Open a pull request on GitHub. In the PR description, explain what you changed and add a screenshot if possible.

## Round 3: Review before merging

Review another teammate's pull request. You must:

1. Open the **Files changed** tab.
2. Leave at least one useful comment or compliment.
3. Approve the pull request if it looks ready.
4. Let the Repo Lead merge it.

After a teammate's work is merged, update your local copy:

```bash
git switch main
git pull
```

## Round 4: Merge-conflict boss battle

Wait for the facilitator to announce this round. Two teammates will both change the startup slogan in `index.html`. Merge one PR first, then work together to resolve the other PR's conflict.

## Round 5: Emergency issue

Open [challenge.html](challenge.html) in your browser, enter your group number and team name, and press **Reveal our emergency**.

Create the displayed challenge as a GitHub Issue **inside your team's fork**. Assign it to a teammate, create a new branch, fix it, and open a PR that includes:

```text
Closes #ISSUE_NUMBER
```

Merging the PR should automatically close the issue.

## Definition of done

- [ ] Every teammate created a branch and commit
- [ ] Every teammate opened a pull request
- [ ] Every PR received a teammate review
- [ ] The team resolved the merge conflict
- [ ] The emergency issue was closed through a PR
- [ ] The final website still works
