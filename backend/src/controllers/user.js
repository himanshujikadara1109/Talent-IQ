import User from "../models/User.js";
import {clerkClient} from "@clerk/express";

export const createOrGetUser = async (req, res) => {
  try {
    const { userId, sessionClaims } = req.auth(); // Clerk userId (clerkId)

      console.log('userId', userId, req.auth());

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // 1️⃣ Check if user already exists
    let user = await User.findOne({ clerkId: userId });
    const clerkUser = await clerkClient.users.getUser(userId);

    console.log('clerkUser', clerkUser);
    if (!user) {
      // 2️⃣ Create user
      user = await User.create({
          clerkId: userId,
          email: clerkUser.emailAddresses[0]?.emailAddress,
          name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
