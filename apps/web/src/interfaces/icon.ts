export interface IIcon {
  name?: string;
  width: number;
  height: number;
  color?: string;
  isActive?: boolean;
  onClick?: () => void;
}
