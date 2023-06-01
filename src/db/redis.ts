import { createClient } from "redis";
import { configDotenv } from "dotenv";
configDotenv();

const redis = createClient({
  url: "redis://redis-10710.c1.us-west-2-2.ec2.cloud.redislabs.com:10710",
  password: process.env.REDIS_SECRET,
});

redis.on("error", (err) => console.log("Redis Client Error", err));

const connectRedis = async () => {
  await redis.connect();
};
connectRedis();

export default redis;
