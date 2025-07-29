import React, { useState, useMemo } from 'react';

// ダミーデータ
const dummyExperiences = [
  {
    id: 1,
    title: "転職活動で学んだ面接のコツ",
    content: "転職活動を通じて、面接で重要なのは技術力だけでなく、コミュニケーション能力や企業への理解度も大切だということを学びました。特に逆質問の準備は必須で...",
    tags: ["転職", "面接", "キャリア"],
    majorCategory: "キャリア",
    minorCategory: "転職活動"
  },
  {
    id: 2,
    title: "副業でWebサイト制作を始めた話",
    content: "本業とは別に副業でWebサイト制作を始めました。最初は不安でしたが、クラウドソーシングサイトで小さな案件から始めて、徐々にスキルアップできました...",
    tags: ["副業", "Web制作", "フリーランス"],
    majorCategory: "キャリア",
    minorCategory: "副業・フリーランス"
  },
  {
    id: 3,
    title: "React学習の効率的な進め方",
    content: "Reactを学習する際に、公式ドキュメントから始めて、小さなプロジェクトを作りながら学ぶのが最も効果的でした。特にHooksの概念は実際に使ってみることで...",
    tags: ["React", "学習", "プログラミング"],
    majorCategory: "技術",
    minorCategory: "フロントエンド"
  },
  {
    id: 4,
    title: "リモートワークで集中力を維持する方法",
    content: "リモートワークを始めて1年が経ちました。最初は集中力の維持に苦労しましたが、作業環境の整備とタイムマネジメントの工夫で改善できました...",
    tags: ["リモートワーク", "集中力", "働き方"],
    majorCategory: "ライフスタイル",
    minorCategory: "働き方"
  },
  {
    id: 5,
    title: "AWS認定資格取得の勉強法",
    content: "AWS Solutions Architect Associateの資格を取得しました。実際のハンズオン経験と問題集の組み合わせが効果的でした。特に実際にAWSを触ってみることが...",
    tags: ["AWS", "資格", "クラウド"],
    majorCategory: "技術",
    minorCategory: "インフラ・クラウド"
  },
  {
    id: 6,
    title: "スタートアップでの働き方体験談",
    content: "大手企業からスタートアップに転職して感じた違いについて。意思決定の速さや裁量の大きさは魅力的でしたが、一方で安定性や福利厚生面での課題も...",
    tags: ["スタートアップ", "転職", "働き方"],
    majorCategory: "キャリア",
    minorCategory: "転職活動"
  }
];

// カテゴリデータ
const categories = {
  "すべて": ["すべて"],
  "キャリア": ["すべて", "転職活動", "副業・フリーランス"],
  "技術": ["すべて", "フロントエンド", "バックエンド", "インフラ・クラウド"],
  "ライフスタイル": ["すべて", "働き方", "学習・成長"]
};

function App() {
  const [selectedMajorCategory, setSelectedMajorCategory] = useState("すべて");
  const [selectedMinorCategory, setSelectedMinorCategory] = useState("すべて");

  // フィルタリングされた体験談
  const filteredExperiences = useMemo(() => {
    return dummyExperiences.filter(experience => {
      if (selectedMajorCategory === "すべて") return true;
      if (selectedMajorCategory !== experience.majorCategory) return false;
      if (selectedMinorCategory === "すべて") return true;
      return selectedMinorCategory === experience.minorCategory;
    });
  }, [selectedMajorCategory, selectedMinorCategory]);

  // 大カテゴリ変更時の処理
  const handleMajorCategoryChange = (category) => {
    setSelectedMajorCategory(category);
    setSelectedMinorCategory("すべて");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">体験談フィード</h1>
          <p className="text-gray-600">みんなの体験談を読んで、新しい発見をしよう</p>
        </div>

        {/* フィルター部分 */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 大カテゴリ選択 */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                大カテゴリ
              </label>
              <select
                value={selectedMajorCategory}
                onChange={(e) => handleMajorCategoryChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.keys(categories).map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* 中カテゴリ選択 */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                中カテゴリ
              </label>
              <select
                value={selectedMinorCategory}
                onChange={(e) => setSelectedMinorCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={selectedMajorCategory === "すべて"}
              >
                {categories[selectedMajorCategory]?.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 検索結果数 */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredExperiences.length}件の体験談が見つかりました
          </div>
        </div>

        {/* 体験談カード一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map(experience => (
            <div
              key={experience.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                {/* タイトル */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {experience.title}
                </h3>

                {/* 本文冒頭50字 */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {experience.content.substring(0, 50)}...
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* カテゴリ表示 */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{experience.majorCategory} / {experience.minorCategory}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    詳細を見る →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 体験談が見つからない場合 */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">📝</div>
            <p className="text-gray-600">
              選択されたカテゴリに該当する体験談が見つかりませんでした。
            </p>
            <p className="text-gray-500 text-sm mt-1">
              別のカテゴリを選択してみてください。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;