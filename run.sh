#! /bin/bash

set -e

DOCKER_HOME=./docker
DOCKER_COMPOSE="docker compose -f $DOCKER_HOME/docker-compose.yml"

function usage {
    cat <<EOF
$(basename ${0}) is a tool for ...

Usage:
  $(basename ${0}) [command] [<options>]

Options:
  stats|st                 Dockerコンテナの状態を表示します。
  logs                     Dockerコンテナのログを表示します。
  init                     Dockerコンテナ・イメージ・生成ファイルの状態を初期化します。
  start                    すべてのDaemonを起動します。
  stop                     すべてのDaemonを停止します。
  app login                Webサーバーにログインします。
  app dev                  アプリを起動します。
  app build                アプリをビルドします。
  app test                 テストコードを実行します。
  --version, -v            バージョンを表示します。
  --help, -h               ヘルプを表示します。
EOF
}

function version {
    echo "$(basename ${0}) version 0.0.1 "
}

case ${1} in
    stats|st)
        $DOCKER_COMPOSE ps
    ;;

    logs)
        $DOCKER_COMPOSE logs -f
    ;;

    init)
        # 停止＆削除（コンテナ・イメージ・ボリューム）
        pushd $DOCKER_HOME
        docker compose down --rmi all --volumes
        rm -Rf ../node_modules
        popd
    ;;

    start)
        $DOCKER_COMPOSE up -d --wait
    ;;

    stop)
        pushd $DOCKER_HOME
        docker compose down
        popd
    ;;

    app)
      case ${2} in
          login)
              $DOCKER_COMPOSE exec app /bin/sh
          ;;
          dev)
              $DOCKER_COMPOSE exec app npm run dev
          ;;
          build)
              $DOCKER_COMPOSE exec app npm run build
              $DOCKER_COMPOSE exec app npm run build-storybook
          ;;
          test)
              $DOCKER_COMPOSE exec app npm run prettier
              $DOCKER_COMPOSE exec app npm run lint
              $DOCKER_COMPOSE exec app npm run ts-check
              $DOCKER_COMPOSE exec app npm run test
          ;;
          *)
              usage
          ;;
      esac
    ;;

    help|--help|-h)
        usage
    ;;

    version|--version|-v)
        version
    ;;

    *)
        echo "[ERROR] Invalid subcommand '${1}'"
        usage
        exit 1
    ;;
esac


