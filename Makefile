SHELL := /bin/bash

.SHELLFLAGS := -eu -o pipefail -c

JS_OPS_SH := ./scripts/js-ops.sh

# 変数定義
BASE_DIR := $(CURDIR)
DOCKER_HOME := $(BASE_DIR)/docker
COMPOSE_FILE := $(DOCKER_HOME)/docker-compose.yml
ENV_FILE := $(BASE_DIR)/.env
DOCKER_CMD := docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE)
APP_CMD := $(DOCKER_CMD) exec profile-isystk-com-app

# デフォルトタスク
.DEFAULT_GOAL := help

.PHONY: help
help: ## ヘルプを表示します。
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "} {printf "%-20s %s\n", $$1, $$2}'

.PHONY: ps
ps: ## Dockerコンテナの状態を表示します。
	$(DOCKER_CMD) ps

.PHONY: logs
logs: ## Dockerコンテナのログを表示します。
	$(DOCKER_CMD) logs -f

.PHONY: init
init: ## 初期化します。
	@if [ ! -f .env ]; then \
		echo "📄 .env not found, copying from .env.example"; \
		cp .env.example .env; \
	fi
	$(DOCKER_CMD) down --rmi local --volumes
	rm -rf "$(BASE_DIR)/node_modules"

.PHONY: up
up: ## 起動します。
	docker network inspect docker_default >/dev/null 2>&1 || docker network create docker_default
	$(DOCKER_CMD) up -d --wait

.PHONY: down
down: ## 停止します。
	@pushd "$(DOCKER_HOME)" >/dev/null; docker compose down; popd >/dev/null

.PHONY: restart
restart: ## 再起動します。
	@make down
	@make up

.PHONY: app
app: ## appコンテナに入ります。
	$(APP_CMD) /bin/bash

.PHONY: tinker
tinker: ## tinkerを実行します。
	$(APP_CMD) php artisan tinker

.PHONY: npm-run-dev
npm-run-dev: ## appコンテナで開発用ビルドを実行します。
	$(APP_CMD) npm run dev

.PHONY: npm-run-build
npm-run-build: ## appコンテナでビルドを実行します。
	$(APP_CMD) npm run build; \
	$(APP_CMD) npm run build-storybook;

.PHONY: format
format: ## コード自動整形 [branch|staged|file_paths...]
	@bash $(JS_OPS_SH) format $(filter-out $@,$(MAKECMDGOALS))

.PHONY: test
test: ## テスト実行 [branch|staged|file_paths...]
	@bash $(JS_OPS_SH) test $(filter-out $@,$(MAKECMDGOALS))

.PHONY: pre-commit
pre-commit: ## コミット前にすべてのチェックを実行します。
	@make format
	@make test
