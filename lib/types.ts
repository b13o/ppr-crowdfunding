export interface Project {
  id: string;
  title: string;
  description: string;
  story: string;
  image: string;
  thumbnail: string;
  category: string;
  creator: string;
  goalAmount: number;
  fundedAmount: number;
  backers: number;
  daysRemaining: number;
  rewards: Reward[];
  tags: string[];
  createdAt: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  amount: number;
  deliveryDate: string;
  backers: number;
  limited: boolean;
  remaining?: number;
}
