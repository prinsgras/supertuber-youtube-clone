import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertVideoSchema, insertSubscriptionSchema, insertWatchHistorySchema, insertWatchLaterSchema, insertLikedVideoSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Videos
  app.get("/api/videos", async (req, res) => {
    try {
      const { limit = "20", offset = "0", category } = req.query;
      const videos = await storage.getVideos(
        parseInt(limit as string), 
        parseInt(offset as string),
        category as string
      );
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch videos" });
    }
  });

  app.get("/api/videos/trending", async (req, res) => {
    try {
      const videos = await storage.getTrendingVideos();
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trending videos" });
    }
  });

  app.get("/api/videos/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).json({ message: "Search query required" });
      }
      const videos = await storage.searchVideos(q as string);
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to search videos" });
    }
  });

  app.get("/api/videos/:id", async (req, res) => {
    try {
      const videoId = parseInt(req.params.id);
      const video = await storage.getVideo(videoId);
      
      if (!video) {
        return res.status(404).json({ message: "Video not found" });
      }
      
      // Increment view count
      await storage.incrementViewCount(videoId);
      
      res.json(video);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch video" });
    }
  });

  app.get("/api/channels/:id/videos", async (req, res) => {
    try {
      const channelId = parseInt(req.params.id);
      const videos = await storage.getVideosByChannel(channelId);
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch channel videos" });
    }
  });

  // Users/Channels
  app.get("/api/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Subscriptions (mock user ID as 1 for simplicity)
  app.post("/api/subscriptions", async (req, res) => {
    try {
      const validatedData = insertSubscriptionSchema.parse({
        ...req.body,
        subscriberId: 1 // Mock current user
      });
      
      const subscription = await storage.subscribe(validatedData);
      res.status(201).json(subscription);
    } catch (error) {
      res.status(400).json({ message: "Invalid subscription data" });
    }
  });

  app.delete("/api/subscriptions/:channelId", async (req, res) => {
    try {
      const channelId = parseInt(req.params.channelId);
      await storage.unsubscribe(1, channelId); // Mock current user
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to unsubscribe" });
    }
  });

  app.get("/api/subscriptions", async (req, res) => {
    try {
      const videos = await storage.getSubscriptions(1); // Mock current user
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscriptions" });
    }
  });

  app.get("/api/subscriptions/check/:channelId", async (req, res) => {
    try {
      const channelId = parseInt(req.params.channelId);
      const isSubscribed = await storage.isSubscribed(1, channelId); // Mock current user
      res.json({ isSubscribed });
    } catch (error) {
      res.status(500).json({ message: "Failed to check subscription status" });
    }
  });

  // Watch History
  app.post("/api/history", async (req, res) => {
    try {
      const validatedData = insertWatchHistorySchema.parse({
        ...req.body,
        userId: 1 // Mock current user
      });
      
      const history = await storage.addToHistory(validatedData);
      res.status(201).json(history);
    } catch (error) {
      res.status(400).json({ message: "Invalid history data" });
    }
  });

  app.get("/api/history", async (req, res) => {
    try {
      const videos = await storage.getHistory(1); // Mock current user
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch history" });
    }
  });

  // Watch Later
  app.post("/api/watch-later", async (req, res) => {
    try {
      const validatedData = insertWatchLaterSchema.parse({
        ...req.body,
        userId: 1 // Mock current user
      });
      
      const watchLater = await storage.addToWatchLater(validatedData);
      res.status(201).json(watchLater);
    } catch (error) {
      res.status(400).json({ message: "Invalid watch later data" });
    }
  });

  app.delete("/api/watch-later/:videoId", async (req, res) => {
    try {
      const videoId = parseInt(req.params.videoId);
      await storage.removeFromWatchLater(1, videoId); // Mock current user
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to remove from watch later" });
    }
  });

  app.get("/api/watch-later", async (req, res) => {
    try {
      const videos = await storage.getWatchLater(1); // Mock current user
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch watch later" });
    }
  });

  // Liked Videos
  app.post("/api/liked-videos", async (req, res) => {
    try {
      const validatedData = insertLikedVideoSchema.parse({
        ...req.body,
        userId: 1 // Mock current user
      });
      
      const like = await storage.likeVideo(validatedData);
      res.status(201).json(like);
    } catch (error) {
      res.status(400).json({ message: "Invalid like data" });
    }
  });

  app.delete("/api/liked-videos/:videoId", async (req, res) => {
    try {
      const videoId = parseInt(req.params.videoId);
      await storage.unlikeVideo(1, videoId); // Mock current user
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to unlike video" });
    }
  });

  app.get("/api/liked-videos", async (req, res) => {
    try {
      const videos = await storage.getLikedVideos(1); // Mock current user
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch liked videos" });
    }
  });

  app.get("/api/liked-videos/check/:videoId", async (req, res) => {
    try {
      const videoId = parseInt(req.params.videoId);
      const isLiked = await storage.isLiked(1, videoId); // Mock current user
      res.json({ isLiked });
    } catch (error) {
      res.status(500).json({ message: "Failed to check like status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
