# Kohei Hida — Profile

経歴・技術・コミュニティ活動を紹介する個人プロフィールサイトです。

## 閲覧・編集

`index.html` をブラウザーで開くと閲覧できます。外部ライブラリやビルドは不要です。本文は `index.html`、見た目は `styles.css`、背景動画の操作は `hero-video.js` で編集します。

ナビゲーションから Profile / Career / Skills / Activities へ移動できます。スマートフォン向けのレイアウトと印刷用スタイルがあります。背景動画はJavaScriptで無音ループ再生します。一時停止・再開に対応し、動きを減らす設定では自動再生しません。JavaScript無効時や再生できない場合も静止画と本文を表示します。

## 内容

掲載内容の確認項目は [docs/content-review.md](docs/content-review.md) にあります。

## GitHub Pages

レビュー後、公開対象ブランチのルートをGitHub Pagesの配信元に設定すれば配信できます。この変更では公開設定・pushは行っていません。

## 作業方針

実装は作業ブランチで進め、差分を確認してからmainへ取り込みます。現在の作業ブランチは `feat/self-introduction-slides` です。

## トップの動画

提供された `17963_1280x720.mov` からWeb用MP4（`assets/barista-hero.mp4`）と静止画（`assets/barista-poster.jpg`）を作成しています。画面全体を埋めるため、画面比率によって動画の端をトリミングします。元ファイルは変更していません。
