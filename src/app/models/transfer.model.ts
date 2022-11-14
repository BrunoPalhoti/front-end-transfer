export interface Transefer{
  id?: number;
  accountOring: string;
  accountDestin: string;
  velue: number;
  dateScheduled: string;
  dateTransfer: string;
  period: string;
  rate?: number
}
