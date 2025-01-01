<div style=" display: flex; justify-content: space-between">

<div style="width: 45%">

#### Stage - track -> commit -> it will store in history / log.

`Ctrl + Insert` To Copy

`Shift + Insert` To Paste

`code .` Open git bash by open with folder then using commnd line open vs code for it using 
clear To clear terminal.

`git --version` : To check Git version.

`git status` Shows the status of your working directory such as changed, untracked, stage and commited files.

`git status –s` To show the shorthand of files status.
- First green `M` indicates the files are modified in staging area.
- Second red `M` indicates the files are modified in working area.


### GITHUB
- Repository Hosting Service

Remote Repository:
- `Git remote add name url`   adding url
- `Git remote -v check url`   check url
- `Git push -u origin master` push code
- `Git remote set-url origin url` url change url

### IMPORTANT TERMINOLOGY

- `Branch`      repository diverges from main working directory.
- `Checkout`    is used for the act of switching - between different versions of a target entity
- `Clone`       making copy from server.
- `Merge`       combining branches
- `Origin`      remote repository from a project was initially cloned
- `Pull`        receive the data from Server (GITHUB)
- `Push`        Upload local repository to sever
- `Git Ignore` use for intentionally untrack the fine
- `Git Diff`    shows changes between commit, working tree etc.
- `Git rm`      for removing files. 


### INITIAL PROCESSES
`mkdir Project/FolderName` It make folder there in editor file.

`ls` To go inside the folder and see files in working tree.

`cd Project/FolderName` Go inside folder by name.
Now we are inside folder

`ls –a` To see hidden files.

`ls -lart`` To show all hidden folders.

`ls .git` To see git history of files/inner file storing and details.

### COMMIT HISTORY

`git log`
Displays commit history of current branch.

`git log -p –7`
Displays the last 7 commits with changes / History.

`git log --graph --oneline –decorate`
Shows a graphical commit history.

**Difficult**
`git log --follow [file]`
Shows history of a specific file.

`git log –-oneline`
Display the files that have been modified.

`git log --stat –M`
Shows commit statistics with renames.

`git log --follow [file]`
Show the commits that changed file, even across renames.

`git log branchB..branchA`
Displays commits in branchA that are not in branchB.

`git show [SHA]`
Show any object in Git in human-readable format

**Reset from further any log**

`Then: $ git reset (paste id here).`
Copy any id of change from that you want to reset from that. 


### TRACKING PATH CHANGES

`git rm [file]`
Removes a file from the working directory and stages the deletion.

`git rm --cached fileName.ext`
To delete / remove file from only staging area.

`git rm –a`
To unstage all files at once.

`rm -rf .git/[file]`
Removes the entire Git repository or any file (use with caution).
To remove hidden git folder.

`git mv [existing-path] [new-path]`
Moves or renames a file and stages the change.


### BRANCHING , CHECKOUT AND MERGING:

- `Creating branches in git` to ignore the risk of making spoil the software.
- Commonly we work on the master branch by default.
- Always create new branch while modifying any file then switch to that branch / this also every new pull request.
- Always update or commit your master/present branch before creating or switching to another branch.

`git branch`
Check present branches & current branches is shown with `*`.

`git checkout`
Switch to previous branch you were working on.

`git branch [new-branch-name]`
Creates a new branch.

`git checkout [branch-name]`
To switch to that from the existing branch or it also create new branch.

`git checkout –b branchName`
To get directly into new branch with creating it.

`git branch -M newName`
To change the name of master branch to another name.

`git branch –d branchName`
To delete another any directly not perform for present branch.

**Difficult**

`git diff branchB...branchA`
Shows differences between two branches.

`git checkout [file]`
It update file to recover it by match it to last commit version.

`git checkout –f`
To match all file together with last commit version.

`git merge [branch-name]`
Merges changes from one branch into the current branch.

`git merge [alias / Origin] [branch-name]`
Merge a remote branch into your current branch to bring it up to date

`git merge –abort`
Aborts a conflicted merge.

**MERGE CONFLICT**

- This comes when two people make changes in the same line.
- That takes git to the confusion.
- It show to resolve the conflicts

**Resolve changes by editing code.**
- Take preserve correct code
- Then mark as resolve
- Commit merge
Then merge pull request.


### ALL STASH COMMANDS

`git stash`
Temporarily stores changes in working directory that are not ready to be committed.

`git stash list`
Lists stored stashes.

`git stash drop`
Discards a stash of file.

`git stash pop`
Applies and removes the latest stash.

`git stash clear`
To remove or separate the change without committing.

### OTHER REMOTE COMMANDS

`git remote add upstream [url]`
Adds an upstream remote repository.

`git push upstream master`
To push file to the main github a/c from it was cloned/copied.

- It also removes or delete earlier thing that are changed.
- It update the account original repo with new files.
- But this can update/change the fork/cloned file in your account.
- If you push file branch to the upstream account then your fork/clone repo in you’re a/c may not be change, the upstream may contain more commits than your repo file.

### Merging all files in one commit

1) `git rebase -i idOfFirst/AnyEarlierCommit`
It will merge all present changes in that earlier id commit.
This do squash and update changes to given id commit.
Then in new window interface : replace ‘pick’ by ‘s’ to merge all changes and files.

2) reset the id , then stash to unstage then stage return the files.

3) `git reset id / $ git reset --hard idAnyEarlierFirst `
This make one commit with removing all earlier directory file change.

### ADVANCED GIT TECHNIQUES AND SHORTCUTS

Use this commad after having good experience in git and carefully.
In GitHub using > (period key) - you can edit any repository of GitHub in Vs code but can’t use terminal because of cloud Vs code.

`git log --graph --oneline –decorate`
This give git log history in filtered & sorted form.

`git bisect start`
To get last working / error free commit to get out of bug problem in code.
Initiates a binary search to find a faulty commit.

`git bisect good / bad`
For each commit later to move further commits to know which commit to be fixed.
Mark commits as good or bad in binary search.

`git reflog`
Shows a log of all references, useful for undoing changes.

### GIT UPSTREAM COMMANDS

To copying github repo in your.
Using fork option to copy any other github repository in own account.

`git clone urlofRepo/sshofrepo`
The second way.

`git clone ‘SSH url of file’ folderName`
Clone in it your computer folder.
Always open the git bash in new folder for cloning files.
After cloning any repo open it and go inside.

`git remote add upstream`
To see where the code folder is fork/copy/clone.


</div>

<div style="width: 45%"> 

<!-- -------------------------------------- -->
<!-- -------------------------------------- -->

### CONFIGURATION / USER REGISTRATION

**Configuring user information used across all local repositories.**

`git config --global user.name "[firstname lastname]"`
Sets your global username to identify.

`git config --global user.email "[valid-email]"`
Sets your global email that associated with your each changes.

`git config --global color.ui auto`
Enables colored output to easy understanding.

`git config --global alias.[alias-name] "[command]"`
Creates an alias for a Git command.

`git config --global core.excludesfile [file]`
Specifies a global file for ignoring patterns, prevent files from unintentional staging and commiting.

`git config --list`
User successfully registered

### IGNORING FILES

`touch .gitignore` To make git ignore file to avoid the automatic generated file or any another file from adding & committing.

`/myfile.txt`  This from the opening folder only

`*.log`  To ignore all .log extension files.

`log.txt [File]` To ignore this file from same folder not the inside the folder or directory.

Similar write `folderName`  in `.gitignore` file to ignore that folder by git.


### REPOSITORY INITIALIZATION AND CLONING

`git init` Initializes a new Git repository for access by git.

`git clone [url]` Clones a remote repository to your local machine.


### STAGE & SNAPSHOT

`git add [fileName]`
To add file by its name from untrack to staging area to commit.

`git add .`
`git add –A`
To add all files at once into the git.

`Esc -> :wq -> Enter. Or :x Or somewhere: Q + arrows.`
To Avoid the vim editor while committing the files.

`cat names.txt`
To see change in this file.

`git restore –staged`
To restore file at staging area.

`git restore --staged fileName.ext`
To unstage from staging.

###GIT DIFF
Shows unstaged area changes with staging area.
Track the changes that not have been staged.
`git diff –staged`
Shows staged area changes with last commit.
Track the changes that have staged but not commited.

`git restore [file]`
Discards changes in the working directory

### COMMITTING THE CHANGES

`git commit`
All change goes to commit in present branch.

`git commit -m "[descriptive message]"`
Commits staged changes with a message.

**Difficult Commit**

`git commit –a –m`
To commit all files by skipping the staging area.

`git commit –a "Adding waste"`
If someone commit one file created by touch command.

`git commit –am`
To commit all git files together.

`git commit --amend -no –edit`
It works only on unpushed code to remote repository.

`git revert better-days`
It undo the new commit.

`git clean –df`
Removes/delete untracked files and directories from remote repo.

`git clean -rf .[fileName.ext]`
Forcefully removes/delete a specific file.

`git commit --fixup [fileName]`
Creates a commit to fixup an earlier commit.

`git commit --squash [fileName]`
Squashes changes from an earlier commit.

`git commit -i –autosquash`
Interactively rebase and autosquash commits.


### RETRIEVING UPDATES FROM ANOTHER REPOSITORY AND UPDATING LOCAL REPOS.
### REMOTE REPOSITORY INTERACTION

- `Remote` Working with url or online repo.
- `Add` Adding new url
- `Origin`  Name of url to / all files in any github account repo have name origin as default.

`git push [alias] [branch]`
Share local branch commits to the remote repository branch

`git fetch [alias]`
Fetches changes from a remote repository.

`git merge [branch-name]`
Fetch down all the branches from that Git remote
Share local branch commits to the remote repository branch

`git pull` == `git fetch [alias]` + `git merge [branch-name]`
Fetches and merges changes from a remote repository.

`git pull upstream main`
Pulls changes from the `main` branch of the upstream repository.

**To make your main branch sync with Upstream**

Two ways to keep your main branch file updated with your upstream a/c repo main branch.

1) click Fetch upstream button.

2) `git fetch --all  -- prune`

- `Fetch` - attaching all files
- `All` - all files
- `Prune` – deleted files also include.

`git fetch origin`

In your working directory to make your main / master branch equal update it with master branch of upstream a/c .
Then `git push origin master / url` check this optional.

3) We can also do like this in main branch.
`git pull upstream main`
Then ` git push origin master`
This sync your working directory branch with remote repository.


**Make an account on GitHub then create repository by giving name, description & selecting private.**
 `git remote add origin https://github.com/IdofGit /Gitin1.git`

`git remote`
to check repository name.

`git remote –v`
Lists of attached remote repositories & give urls.

`git remote add [alias / Origin] [url]`
Adds a remote repository named `origin`.

`git remote add secondary https://github.com/username/new-repo.git`
adding another link to repo

`git push origin [branch]`
Pushes changes to a remote branch. 

**Not So Common**

`git remote remove origin`
To remove remote url linked to directory

`git remote set-url origin https://github.com/username/new-repo.git`
adding new url to repo

`git push origin branchName –f`
To force push and replace earlier file in remote repo with new commited file.

`git push origin master --force`
Forcefully pushes changes to the master branch.
This overwrite the remote commit with local / working code.

### REWRITE HISTORY

Rewriting branches, updating commits and clearing history

`git commit --amend -m "[new-message]"`
Edits the last commit message.

`git reset [file]`
Unstages changes from the index not in working directory.

`git rebase [branch]`
Apply any commits of current branch ahead of specified one

`git reset --hard [commit]`
Clear staging area, rewrite working tree from specified commit

`git reset --hard origin / master`
Undo the changes from your local file by replacing with remote repository after this local changes will be lost.


### REBASE AND INTERACTIVE REBASE

`git rebase [branch]`
Applies commits from one branch on top of another.

`git rebase -i [commit]`
Interactively rewrites commit history.

`git rebase -i [idAnyEarlierFirst]`
Interactive rebase based on commit IDs.

`git rebase master –interactive`
To combine all commit of branch in to 1 and commit it to master branch.
Using Hooks in repo to run test before committing with remote.


</div>
</div>