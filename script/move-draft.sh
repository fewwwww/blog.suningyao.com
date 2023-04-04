# move draft outside before deployment
# so it won't be built and published

# create temp storage folder if not exist
mkdir -p ./storage

# move draft files to draft temp storage folder if draft folder exist
if [ -d "./static/draft" ]; then
  mv ./static/draft ./storage
fi

if [ -d "./docs/Drafts" ]; then
  mv ./docs/Drafts ./storage
fi
