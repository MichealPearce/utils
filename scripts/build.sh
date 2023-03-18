echo 'cleaning...'
rm -rf dist

vite build

echo 'compiling types...'
tsc --outDir dist
