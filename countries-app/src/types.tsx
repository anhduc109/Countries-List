export type Language = {
  name: string;
};

export type Country = {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  flag: string;
  languages: Language[];
};

export type HandleIsAsc = (field: string) => void;

export type HandleSearchInput = (
  evt: React.ChangeEvent<HTMLInputElement>
) => void;
