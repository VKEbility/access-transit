# Contributing to Access Transit

Thank you for your interest in contributing to this Civic Tech project. Together, we can make a meaningful impact!

# Table of Contents

- [Review Branching](#review-branching)
- [Creating Branches](#creating-branches)
- [Commit Changes](#commit-changes)
- [Commit Message Guidelines](#commit-message-guidelines)
    - [Commit Examples](#commit-examples)
- [Merge Before You Push](#merge-before-you-push)
  - [Merging `main` branch into your branch](#merging-main-branch-into-your-branch)
  - [Merging your branch into `main`](#merging-your-branch-into-main)
- [Push and Create a PR](#push-and-create-a-pr)

## Review Branching

<details><summary>When should we create a new branch?</summary><br>
Branches are used to diverge from the main code base. They are useful because they create a copy of existing code without modifying the existing code. Think of it as your very own sandbox where you can create anything new.

Therefore, a new branch should be created for any new change to any of the files in the project. This includes but is not limited to creating a new feature in the repo and/or fixing a bug in the repo.

</details>
<br>
<details><summary>When do merge conflicts occur?</summary><br>
Merge conflicts occur when we have code that could possibly overwrite code that was already there. They are bound to happen if multiple people are working on the same file.
</details>
<br>
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

  1. The first `-m` option specifies the commit **title** (short message).
  2. The second `-m` option specifies the commit **body** (detailed explanation).
  3. The third `-m` option specifies the **footer** (additional information such as references to issues, ticket numbers, etc.).

In your feature branch, run:

```sh
git add -A
git commit -m "short commit message" -m "detailed explanation of the changes made." -m "related issue #__"
```
# Commit Message Guidelines

A properly formed Git commit message should always be able to complete the following sentence: → If applied, this commit will _*your subject line here*_

Use the following [semantic](https://www.conventionalcommits.org/en/v1.0.0/) prefixes for commit messages:

- **Feat**: A new feature for the user
- **Fix**: Resolution of any bug that restores expected functionality
- **Build**: Changes affecting the build system or external dependencies (e.g., webpack, npm packages)
- **Refactor**: Refactoring production code (e.g., renaming a variable) that improves readability or structure
- **Chore**: Updating tasks, build processes, or dependencies (no production code change)
- **Test**: Adding or refactoring tests (no production code change)
- **Perf**: Code changes that improve performance
- **Style**: Formatting changes (no production code change)
- **Docs**: Changes to the documentation

#### Commit Examples

```git
feat: add user auth validation
chore: fix typo in validation function
build: improve webpack config
refactor error handling in API call
chore: update npm packages
test: add test for calculateTotal function
perf: optimize image loading for homepage
style: standardize formatting in CSS file
docs: remove usage example to README
docs: update API documentation for login
```

## Merge Before You Push

While you've been working on your branch code, it's inevitable that your teammates may have pushed new changes to the main branch. To avoid potential merge conflicts when pushing, you should integrate the latest main branch into your own branch before pushing your changes:

### Merging `main` branch into your branch

First, before switching branches, save any uncommitted changes made on your current branch (you _*are*_ in your own branch... right?):

1. **Stash any uncommitted changes**:

    ```sh
    git stash
    ```

2. **Switch to the `main` branch and pull the latest updates from the remote repo**:

    ```sh
    git checkout main
    git pull
    ```

3. **Switch back to your feature branch and merge the `main` branch into _*your branch*_**:

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