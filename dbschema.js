let db = {
  users: [
    {
      userId: "g4pJt2HUhBOavLbr0yT1Wy1s5AF2",
      email: "user@email.com",
      handle: "user",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/socialapp-6d379.appspot.com/o/422270469577.png?alt=media",
      bio: "Hello my name is user",
      website: "https://user.com",
      location: "Chicago, USA",
    },
  ],
  posts: [
    {
      userHandle: "user",
      body: "this is the post body",
      createdAt: "2019-11-08T23:28:16.896Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      postId: "1GxmSFPUBMG4eHmXtLV6",
      body: "great post !!",
      createdAt: "2019-11-08T23:28:16.896Z",
    },
  ],
};

const userDetails = {
  // Redux
  credentials: {
    userId: "g4pJt2HUhBOavLbr0yT1Wy1s5AF2",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-11-08T23:28:16.896Z",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/socialapp-6d379.appspot.com/o/422270469577.png?alt=media",
    bio: "Hello my name is user",
    website: "https://user.com",
    location: "Chicago, USA",
  },
  likes: [
    {
      userHandle: "user",
      postId: "1GxmSFPUBMG4eHmXtLV6",
    },
    {
      userHandle: "jean",
      postId: "56K2rpikj2EdGBlEJZmo",
    },
  ],
};
