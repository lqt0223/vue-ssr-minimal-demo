# vue-ssr-minimal-demo

### About the pages

- Both two pages shows 2 counters.
- The bottom counter uses sync data, and increments itself by clicking, which indicates successful hydration.
- The top counter uses async data from the asyncData hook
- On page Profile, the top counter shows the random number in a range 10x bigger than the one on page Home

### How to run
- `npm install`
- `npm run build` (builds only client-side)
- `npm run ssr` (builds server-side and run in an express node server)
