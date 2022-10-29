# restore draft to source before starting server
# it is a reverse operation of move-draft.sh

# move draft files back to source folders
# https://stackoverflow.com/questions/33414768/move-only-if-file-exists-in-a-shell-script
mv ./storage/draft ./static
mv ./storage/Drafts ./docs
