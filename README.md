# 体験談フィードUI

React + Tailwind CSSで作成された体験談フィード表示アプリケーションです。

## 機能

- **カテゴリフィルタリング**: 大カテゴリ・中カテゴリでの絞り込み表示
- **体験談カード表示**: タイトル、本文冒頭、タグを含むカード型レイアウト
- **レスポンシブ対応**: モバイル・タブレット・デスクトップに対応
- **ダミーデータ**: 6件の体験談サンプルデータを含む

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

### 3. ビルド（本番用）

```bash
npm run build
```

## 技術構成

- **React**: 18.2.0
- **Tailwind CSS**: 3.3.6
- **Vite**: 5.0.8
- **状態管理**: React useState

## ファイル構成

```
├── index.html          # メインHTMLファイル
├── src/
│   ├── App.jsx        # メインアプリケーションコンポーネント
│   ├── main.jsx       # Reactエントリーポイント
│   └── index.css      # Tailwind CSSインポート
├── package.json       # 依存関係とスクリプト
├── vite.config.js     # Vite設定
├── tailwind.config.js # Tailwind CSS設定
└── postcss.config.js  # PostCSS設定
```

## カテゴリ構成

- **キャリア**
  - 転職活動
  - 副業・フリーランス
- **技術**
  - フロントエンド
  - バックエンド
  - インフラ・クラウド
- **ライフスタイル**
  - 働き方
  - 学習・成長

## 体験談データ構造

各体験談は以下の構造を持ちます：

```javascript
{
  id: number,
  title: string,
  content: string,
  tags: string[],
  majorCategory: string,
  minorCategory: string
}
```