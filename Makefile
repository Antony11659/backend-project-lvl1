install: 
	npm ci

brain-games:
	node bin/brain-games.js

pablish:
	npm publish --dry-run

lint:
	npx eslint .
