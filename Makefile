install:
	npm ci

hello:
	@echo hello my friend

brain-games:
	node bin/brain-games.js

publish:
	npm link --dry-run

lint:
	npx eslint .