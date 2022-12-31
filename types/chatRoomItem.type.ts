export type users = {
  id: string;
  name: string;
  imageUri: string;
};

export type ChatRoomData = {
  id: string;
  users: users[];
  lastMessage: {
    id: string;
    content: string;
    createdAt: string;
  };
  newMassage: string;
};
