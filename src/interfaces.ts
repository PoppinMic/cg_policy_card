export interface IPolicyCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  premium: number;
  premium_formatted: string;
  payment_date: Date;
  coverage_start_date: Date;
  coverage_end_date: Date;
  renewal: string | null;
  partner: IPartner;
}

interface IPartner {
  id: string;
  name: string;
  logo: string;
}
