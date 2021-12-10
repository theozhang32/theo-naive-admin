export interface IMenu {
  key: string;
  title: string;
  meta: {
    icon?: string;
    permission?: string;
  };
  path?: string;
  children?: IMenu[];
}
