export interface PersonCardData {
  avatarUrl: string;
  name: string;
  title: string;
  subtitle?: string; // "4 години"
  tags?: string[];
  nextAvailable?: string; // "Днес 14:30"
  actionLabel?: string; // Запиши час
}
