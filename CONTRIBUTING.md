# Contributing to Access Transit

Thank you for your interest in contributing to this Civic Tech project. Together, we can make a meaningful impact!

# Table of Contents

- [Review Branching](#review-branching)
- [Creating Branches](#creating-branches)
- [Commit Changes](#commit-changes)
- [Merge Before You Push](#merge-before-you-push)
- [Push and Create a PR](#push-and-make-a-pr)

## Review Branching

<details><summary>When should we create a new branch?</summary><br>
Branches are used to diverge from the main code base. They are useful because they create a copy of existing code without modifying the existing code. Think of it as your very own sandbox where you can create anything new.

Therefore, a new branch should be created for any new change to any of the files in the project. This includes but is not limited to creating a new feature in the repo and/or fixing a bug in the repo.
</details>

<details><summary>When do merge conflicts occur?</summary><br>
Merge conflicts occur when we have code that could possibly overwrite code that was already there. They are bound to happen if multiple people are working on the same file.
</details>

<details><summary>Things to avoid</summary><br>
The `main` branch should always have working code so as a best practice...

- Don't work off of the `main` branch.
- Avoid merging code that hasn't been tested or reviewed into the `main` branch.
</details>

## Creating Branches

Each team member should own their own branch and work exclusively on that branch.

```sh
git branch ben-feature-A
git checkout ben-feature-A
```

Or, create a branch and switch to it in one command:

```sh
git checkout -b ben-feature-A
```

Then see all branches:

```sh
git branch
```

You should then see: (the `*` indicates the current branch)

```sh
  main
* ben-feature-A
```

> TIP: Always check to make sure that you are NOT working in the `main` branch

To switch back and forth between `main` and your branch, run:

```sh
git checkout main
git checkout ben-feature-A
```

## Commit Changes

When you're ready to save your current changes, create a _local commit_.

In your feature branch, run:

```sh
git add -A
git commit -m 'a message describing your changes'
```
**Commit Message Guidelines**

A properly formed Git commit message should always be able to complete the following sentence:
  - If applied, this commit will *your subject line here*

For example:
- If applied, this commit will *refactor function X for readability*
- If applied, this commit will *update getting started doc*
- If applied, this commit will *fix broken routes*
- If applied, this commit will *remove deprecated methods*
- If applied, this commit will *add trip planning feature*
- If applied, this commit will *merge pull request #123 from user/branch*

# Commit Message Guidelines

A properly formed Git commit message should always be able to complete the following sentence:

  - If applied, this commit will *your subject line here*

For example:

- If applied, this commit will *refactor function X for readability*
- If applied, this commit will *fix broken routes*
- If applied, this commit will *add trip planning feature*

Use the following [semantic](https://www.conventionalcommits.org/en/v1.0.0/) prefixes for commit messages:

- **feat**: A new feature for the user
- **fix**: Resolution of any bug that restores expected functionality
- **build**: Changes affecting the build system or external dependencies (e.g., webpack, npm packages)
- **refactor**: Refactoring production code (e.g., renaming a variable) that improves readability or structure
- **chore**: Updating tasks, build processes, or dependencies (no production code change)
- **test**: Adding or refactoring tests (no production code change)
- **perf**: Code changes that improve performance
- **style**: Formatting changes (no production code change)
- **docs**: Changes to the documentation

## Merge Before You Push

While you've been working on your branch code, it's inevitable that your teammates may have pushed new changes to the main branch. To avoid potential merge conflicts when pushing, you should integrate the latest main branch into your own branch before pushing your changes:

### Merging `main` branch into your branch

First, before switching branches, save any uncommitted changes made on your current branch (you *are* in your own branch... right?):

1. **Stash any uncommitted changes**: 

    ```sh
    git stash
    ```

2. **Switch to the `main` branch and pull the latest updates from the remote repo**:

    ```sh
    git checkout main
    git pull
    ```

3. **Switch back to your feature branch and merge the `main` branch into *your branch***:

    ```sh
    git checkout ben-feature-A
    git merge main
    ```

4. **Apply your stashed changes**:

    ```sh
    git stash apply
    ```

Once you have successfully merged `main` into your branch, go ahead and `git push` your changes:

> If this is your first push from this branch, use the `--set-upstream` flag by running: `git push --set-upstream origin ben-feature-A`

### Merging your branch into `main`

Follow the merging steps as usual; if you forget to stash your changes and encounter merge conflicts:

- Resolve conflicts by deleting the `<<<<<<< HEAD`, `=======`, and `>>>>>>> main` markers, keeping just the code that you want.

- Finally, make a new commit to finish resolving these conflicts:

    ```sh
    git add -A
    git commit -m 'Merged main into my branch'
    git push
    ```

## Push and Create a PR

After merging your branch into `main` and pushing to the remote repo, create a pull request:

1. Go to [GitHub.com](github.com) and open your remote repository.
2. Click on the **Pull Requests** tab to create a new PR to merge your branch into `main`.
3. Ask your teammates to review your code, and once approved, merge it.
4. If you want to continue working on your branch, do NOT delete the branch.

Your teammates can then follow the steps listed in [Merge Before You Push](#merge-before-you-push) to update their local repositories.