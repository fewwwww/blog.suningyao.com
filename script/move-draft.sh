# move draft outside before deployment
# so it won't be built and published

# create temp storage folder if not exist
mkdir -p ./storage

# move draft files to draft temp storage folder
mv ./static/draft ./storage
mv ./docs/Drafts ./storage
