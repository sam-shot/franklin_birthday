export interface CardData {
  id: number;
  color: string;
  darkColor: string;
  photos: string[];
  wish: string;
}

export const allPhotos = [
  "https://github-production-user-asset-6210df.s3.amazonaws.com/75101172/456727675-28d29a29-634d-4998-9e90-eeb84c8037cb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250618T220902Z&X-Amz-Expires=300&X-Amz-Signature=16011ae2db983cbaac8b7bb7cafeaecb2f7a3a6c40c156aa83439c3d042b415b&X-Amz-SignedHeaders=host",
  "https://github-production-user-asset-6210df.s3.amazonaws.com/75101172/456727674-4c8c1d1c-728a-44df-b3f6-8e96cc4e0363.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250618T220959Z&X-Amz-Expires=300&X-Amz-Signature=eb0de31c8271a81463434e27b67a5a00215b988bb11effc84d605df8678d04bf&X-Amz-SignedHeaders=host",
  "https://github-production-user-asset-6210df.s3.amazonaws.com/75101172/456729711-68ce4de6-9eff-466f-9302-4de232f7de12.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250618T221017Z&X-Amz-Expires=300&X-Amz-Signature=16c45486fbbe020fb3785a3ab497e1b2af39b8ae6a1e90508d9b24143cfa1795&X-Amz-SignedHeaders=host",
];

export const cardData: CardData[] = [
  {
    id: 1,
    color: "#FF6B6B",
    darkColor: "#e74c3c",
    photos: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1464347744102-11db6282bcc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Franklin, may your birthday be filled with fantastic adventures and endless joy!",
  },
  {
    id: 2,
    color: "#4ECDC4",
    darkColor: "#26a69a",
    photos: [
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1555150345-a1d45d6bf2a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1464347744102-11db6282bcc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Fabulous times ahead, Franklin! Hope your special day sparkles with happiness!",
  },
  {
    id: 3,
    color: "#45B7D1",
    darkColor: "#2980b9",
    photos: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1464299515851-3707ad35aca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Franklin, may fortune smile upon you today and always. Happy Birthday!",
  },
  {
    id: 4,
    color: "#96CEB4",
    darkColor: "#52b788",
    photos: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1555150345-a1d45d6bf2a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Fresh beginnings and fantastic memories await you, Franklin! Celebrate big!",
  },
  {
    id: 5,
    color: "#FECA57",
    darkColor: "#f39c12",
    photos: [
      "https://images.unsplash.com/photo-1549919358-03dfeb8a3e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Franklin, may this birthday mark the start of your most fulfilling year yet, may you grow exponentially in your career!",
  },
  {
    id: 6,
    color: "#FF9FF3",
    darkColor: "#e91e63",
    photos: [
      "https://images.unsplash.com/photo-1464299515851-3707ad35aca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Fantastic Franklin, may your birthday be as wonderful as you are!",
  },
  {
    id: 7,
    color: "#54A0FF",
    darkColor: "#3742fa",
    photos: [
      "https://images.unsplash.com/photo-1555150345-a1d45d6bf2a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1549919358-03dfeb8a3e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Franklin, (Software Director to be) may the Good lord give you the strength to guide us as and create good tech initiatives in the Faculty, rooting for you bro.",
  },
  {
    id: 8,
    color: "#5F27CD",
    darkColor: "#673ab7",
    photos: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1464299515851-3707ad35aca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Franklin, may your future be as bright and fantastic as this celebration!",
  },
  {
    id: 9,
    color: "#00D2D3",
    darkColor: "#00796b",
    photos: [
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1555150345-a1d45d6bf2a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1549919358-03dfeb8a3e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Franklin, celebrate today knowing that fabulous adventures lie ahead!",
  },
  {
    id: 10,
    color: "#FF3838",
    darkColor: "#d32f2f",
    photos: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1464299515851-3707ad35aca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
    wish: "Franklin, Happy birthday too you once again, sam.dev loves ya :)",
  },
];

// Preload images for smooth transitions
export function preloadImages() {
  cardData.forEach((card) => {
    card.photos.forEach((photoUrl) => {
      const img = new Image();
      img.src = photoUrl;
    });
  });
}
