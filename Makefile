install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	brain-calc.js

brain-gcd:
	brain-gcd.js

brain-progression:
	brain-progression.js		

pablish:
	npm publish --dry-run

lint:
	npx eslint .
