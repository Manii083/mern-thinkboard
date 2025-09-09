import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Use IP-based key for better rate limiting in deployment
    const key = `rate-limit:${req.ip}`;
    const { success } = await ratelimit.limit(key);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Error in rateLimiter middleware", error);
    res.status(500).json({ message: "Rate limiter error" });
  }
};

export default rateLimiter;
