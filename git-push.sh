commit_message=${1:-"Initial commit"}

# Run the commands
git init
git add .
git commit -m "$commit_message"
git push