# ベースイメージとしてNode.jsを使用
FROM node:18-alpine

# 作業ディレクトリの設定
WORKDIR /app

# パッケージをコピー
COPY package.json  ./

# 依存関係をインストール
RUN npm install

# プロジェクトファイルをコピー
COPY . .

# ビルドコマンドの実行
RUN npm run build   

# アプリケーションの起動コマンド
CMD ["npm", "run","dev"]