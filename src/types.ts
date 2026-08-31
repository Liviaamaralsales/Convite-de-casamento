export interface GiftItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  reserved: boolean;
  reservedBy?: string;
  reservedAt?: string;
  message?: string;
}

export interface RsvpEntry {
  id: string;
  name: string;
  phone?: string;
  guestsCount: number;
  note?: string;
  attending: boolean;
  createdAt: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  tag: string;
}

export interface WeddingInfo {
  brideName: string;
  groomName: string;
  weddingDate: string; // ISO or readable
  dateDisplay: string;
  timeDisplay: string;
  locationName: string;
  locationAddress: string;
  locationMapUrl?: string;
  pixKey: string;
  pixReceiver: string;
  pixBank: string;
}
