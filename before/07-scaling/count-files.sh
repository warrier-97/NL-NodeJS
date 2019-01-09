# for trimming logic refer https://stackoverflow.com/questions/369758/how-to-trim-whitespace-from-a-bash-variable
echo "$(find . -type f | wc -l)" | tr -d '[:space:]'