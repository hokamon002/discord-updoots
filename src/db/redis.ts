import { createClient } from "redis";
import { configDotenv } from "dotenv";
configDotenv();

const redis = createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_SECRET,
});

redis.on("error", (err) => console.log("Redis Client Error", err));

const connectRedis = async () => {
  await redis.connect();
};
connectRedis();

export default redis;
