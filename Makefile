install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

<<<<<<< HEAD
brain-calc:
	brain-calc.js

=======
>>>>>>> refs/remotes/origin/main
pablish:
	npm publish --dry-run

lint:
	npx eslint .
