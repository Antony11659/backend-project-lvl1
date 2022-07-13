install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	brain-calc.js

pablish:
	npm publish --dry-run

lint:
	npx eslint .
