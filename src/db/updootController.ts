import redis from "./redis";

const increaseUpdoot = async (authorId: string) => {
  const authorScore = await redis.hGet("karma", authorId);

  if (!authorScore) {
    await redis.hSet("karma", authorId, 1);
    return 1;
  } else {
    return await redis.hIncrBy("karma", authorId, 1);
  }
};

const decreaseUpdoot = async (authorId: string) => {
  const authorScore = await redis.hGet("karma", authorId);
  if (!authorScore) {
    await redis.hSet("karma", authorId, -1);
    return -1;
  } else {
    const score = await redis.hIncrBy("karma", authorId, -1);
    return score;
  }
};

const getUpdoot = async (authorId: string) => {
  try {
    const authorScore = await redis.hGet("karma", authorId);
    if (!authorScore) {
      throw "user not found, or setting up new user";
    }
    return parseInt(authorScore);
  } catch (e) {
    console.error(e);
  }
};

export const kv = {
  increaseUpdoot,
  decreaseUpdoot,
  getUpdoot,
};
