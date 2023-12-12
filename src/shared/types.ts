interface Auction {
  id: number;
  title: string;
  subjectId: number;
  bid: Bid[];
  createdAt: Date;
}

interface Bid {
  id: number;
  subjectId: number;
  amount: number;
}
