export interface Pizza {
  id: number;
  title: string;
  imgName: string;
  composition: string;
}

export enum ResponseStatuses {
  EMPTY,
  TRUE,
  FALSE,
}
