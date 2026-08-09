# Batch Publishing Guide

## How to Use Batch Publishing

This allows you to add multiple pottery items through the CMS and publish them all at once with **ONE build** instead of multiple builds.

### Step-by-Step Process

#### 1. Add Items via CMS (No Builds Yet!)

1. Go to `yoursite.com/admin/`
2. Login to the CMS
3. Create pottery items:
   - Click "Pottery Items" → "New Pottery Item"
   - Fill in all details
   - Upload images
   - Click "Save" (NOT Publish!)
4. Repeat for all items (5, 10, 20, however many)
5. Each item appears in the "Drafts" column

#### 2. Batch Publish All Items

**Option A: Publish ALL Drafts (Easiest)**

1. Go to GitHub: https://github.com/MDani0/macsaipottery/actions/workflows/batch-publish.yml
2. Click "Run workflow" button (top right)
3. Leave the input field **empty**
4. Click green "Run workflow"
5. Wait 30-60 seconds
6. ✓ All drafts merged into ONE commit → ONE build!

**Option B: Publish Specific Items**

1. Go to GitHub Pull Requests: https://github.com/MDani0/macsaipottery/pulls
2. Note the PR numbers you want to publish (e.g., #45, #46, #47)
3. Go to Actions: https://github.com/MDani0/macsaipottery/actions/workflows/batch-publish.yml
4. Click "Run workflow"
5. Enter PR numbers: `45,46,47`
6. Click green "Run workflow"
7. ✓ Only those items merged into ONE commit → ONE build!

### What Happens Behind the Scenes

- The GitHub Action finds all your CMS draft pull requests
- Merges them all into one temporary branch
- Creates ONE commit with all changes
- Pushes to master
- Closes all the draft PRs
- Netlify builds ONCE with all changes

### Build Credits Saved

**Before (without batch):**
- 20 items = 20 commits = 20 builds = 20 credits used

**After (with batch):**
- 20 items = 1 commit = 1 build = 1 credit used ✓

### Tips

- You can still publish individual items normally if you only have 1-2 items
- Use batch publish when adding 5+ items at once
- The Action is safe - it won't force push or delete anything important
- All original PR branches are automatically deleted after merge

---

## Troubleshooting

**Q: I don't see the "Run workflow" button**
- You need to be logged into GitHub with write access to the repository

**Q: The action failed**
- Check the Actions tab for error details
- There might be merge conflicts if you edited the same files
- Contact support if needed

**Q: Can I undo a batch publish?**
- Yes, use `git revert` on the batch commit, or restore from GitHub history
