// تایپ یک دسته بندی

// type.ts
export interface TCategory {
  Title: string;
  Image: string;
  Description: string;
  LowestPrice: number | null;
  HighestPrice: number | null;
}

export interface TGetServicerCurrentScore {
  Score: number;
  Categories: TCategory[];
}

export interface SliderItem {
 Id: string;
  Name: string;
  Url: string;
  Link: string;
  Thumbnail: string;
  ThumbnailName: string;
  IsVideo: boolean;
}

export interface ScoreItem {
  ScoreSource: string;
  ScoreType: number;
  TransactionDate: string;
  Count: number;
  Description: string;
}

export interface TGetScoreList {
  Count: number;
  ScoreList: ScoreItem[];
}

export interface TProduct {
  Id: number;
  Title: string;
  Description: string;
  Price: number;
  MainImage: string | null;
  Category: number;
  Status: boolean;
  Attaches: string[]; // اگه بعداً آبجکت باشه باید جداگانه تایپ بسازی
}

export interface TCategory {
  Id: number;
  Title: string;
  Image: string;
}

export interface TProductList {
  Products: TProduct[];
  Categories: TCategory[];
}

export interface SubmitOrderPayload {
  agencyCode: number;
  productId: number;
}
