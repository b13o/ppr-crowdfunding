import { Project } from "./types";

// プレビュー用のモックデータ
const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "EchoWave - AIノイズキャンセルイヤホン",
    description:
      "革新的なAI搭載ワイヤレスイヤホン、環境に適応するノイズキャンセル機能",
    story:
      "EchoWaveは完璧なリスニング体験を実現するために誕生しました。3年間の研究開発を経て、どんな環境にも対応するAI駆動のノイズキャンセル技術を完成させました。",
    image: "/wireless-earbuds-charging-case.jpg",
    thumbnail: "/wireless-earbuds-charging-case.jpg",
    category: "テック",
    creator: "Kentaro Tanaka",
    goalAmount: 500000,
    fundedAmount: 375000,
    backers: 28,
    daysRemaining: 12,
    rewards: [
      {
        id: "1-1",
        title: "アーリーバードスペシャル",
        description: "EchoWaveを40%割引で購入",
        amount: 9900,
        deliveryDate: "2025-03-01",
        backers: 13,
        limited: true,
        remaining: 37,
      },
      {
        id: "1-2",
        title: "スタンダードパッケージ",
        description: "EchoWave + 無料ケース",
        amount: 14900,
        deliveryDate: "2025-03-01",
        backers: 11,
        limited: false,
      },
      {
        id: "1-3",
        title: "プレミアムバンドル",
        description: "EchoWave + アクセサリーパック",
        amount: 24900,
        deliveryDate: "2025-03-01",
        backers: 4,
        limited: false,
      },
    ],
    tags: ["audio", "electronics", "wearables"],
    createdAt: "2024-10-15",
  },
  {
    id: "2",
    title: "ChronoFlow - ミニマリストスマートウォッチ",
    description:
      "14日間のバッテリー寿命を備えた美しくデザインされたスマートウォッチ",
    story:
      "ChronoFlowは優雅なデザインと強力な機能を組み合わせています。テクノロジーは見えないものであるべきだと考えています。",
    image: "/modern-smartwatch.jpg",
    thumbnail: "/modern-smartwatch.jpg",
    category: "ウェアラブル",
    creator: "Taro Yamada",
    goalAmount: 400000,
    fundedAmount: 520000,
    backers: 18,
    daysRemaining: 8,
    rewards: [
      {
        id: "2-1",
        title: "ファウンダーズエディション",
        description: "最初の100ユニット（署名付きケース付き）",
        amount: 19900,
        deliveryDate: "2025-03-15",
        backers: 3,
        limited: true,
      },
      {
        id: "2-2",
        title: "スタンダードエディション",
        description: "ChronoFlowスマートウォッチ",
        amount: 29900,
        deliveryDate: "2025-03-15",
        backers: 11,
        limited: false,
      },
      {
        id: "2-3",
        title: "プロバンドル",
        description: "ウォッチ + 全アクセサリー",
        amount: 49900,
        deliveryDate: "2025-03-15",
        backers: 4,
        limited: false,
      },
    ],
    tags: ["wearables", "design", "technology"],
    createdAt: "2024-10-01",
  },
  {
    id: "3",
    title: "Indieクックブック：世界の街角フード（更新）",
    description:
      "200以上の世界の街角フードレシピを掲載した美しくイラストされたクックブック",
    story:
      "35カ国を旅して本格的な街角フードのレシピを集めました。このクックブックは世界の料理への愛の手紙です。",
    image: "/beautiful-cookbook-street-food-vibrant-colors.jpg",
    thumbnail: "/vintage-cookbook.png",
    category: "出版",
    creator: "Yuki Suzuki",
    goalAmount: 150000,
    fundedAmount: 234000,
    backers: 70,
    daysRemaining: 20,
    rewards: [
      {
        id: "3-1",
        title: "デジタル版",
        description: "PDF + ビデオレシピ",
        amount: 1500,
        deliveryDate: "2025-02-01",
        backers: 28,
        limited: false,
      },
      {
        id: "3-2",
        title: "プリント豪華版",
        description: "限定版ハードカバー + ビデオ",
        amount: 3900,
        deliveryDate: "2025-03-01",
        backers: 32,
        limited: false,
      },
      {
        id: "3-3",
        title: "コレクターズバンドル",
        description: "署名版 + ケース + クッキングキット",
        amount: 9900,
        deliveryDate: "2025-03-15",
        backers: 8,
        limited: true,
      },
    ],
    tags: ["publishing", "food", "travel"],
    createdAt: "2024-09-20",
  },
];

// プロジェクト一覧を取得する API（プレビュー用）
export async function fetchProjects(): Promise<Project[]> {
  // 実際のAPIフェッチの代わりにモックデータを返す
  return Promise.resolve(MOCK_PROJECTS);
}

// プロジェクト詳細を取得する API（プレビュー用）
export async function fetchProjectById(id: string): Promise<Project> {
  const project = MOCK_PROJECTS.find((p) => p.id === id);
  if (!project) {
    throw new Error(`Project with id ${id} not found`);
  }
  return Promise.resolve(project);
}
