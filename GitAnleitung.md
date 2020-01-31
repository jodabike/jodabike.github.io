# I. Change Directory to the folder
cd Github/jodabike.github.io

# II. PULL the newest version from the server
git pull

# III. Do your editing
...

# IV. ADD your changes
git add --all

# V. COMMIT your changes, where you should name your changes within the quotes
git commit -m "e.g. newfile X"

# VI. PUSH your changes to the server (you will be asked for name & password)
git push

# VII. Combine steps IV.-VI. in one command (you will be asked for name & password)
git add --all && git commit -m "e.g. newfile X" && git push
