import connectRedis from "./redis";

const increaseUpdoot = async (authorId: string) => {
  const authorScore = await connectRedis.hGet("karma", authorId);
  if (!authorScore) {
    await connectRedis.hSet("karma", authorId, 1);
  } else {
    await connectRedis.hIncrBy("karma", authorId, 1);
  }
};

const decreaseUpdoot = async (authorId: string) => {
  const authorScore = await connectRedis.hGet("karma", authorId);
  if (!authorScore) {
    await connectRedis.hSet("karma", authorId, -1);
  } else {
    await connectRedis.hIncrBy("karma", authorId, -1);
  }
};
export const kv = {
  increaseUpdoot,
  decreaseUpdoot,
};
