import { Events, MessageReaction, User } from "discord.js";
import { VOTE } from "../types";
import { kv } from "../db/updootController";

const updootEvent = {
  name: Events.MessageReactionAdd,
  async execute(reaction: MessageReaction, _user: User) {
    try {
      const messageAuthorId = reaction.message.author?.id;
      if (!messageAuthorId) {
        throw "author of message not found";
      }

      if (reaction.emoji.name === VOTE.UPDOOT) {
        await kv.increaseUpdoot(messageAuthorId);
      }
      if (reaction.emoji.name === VOTE.DOWNDOOT) {
        await kv.decreaseUpdoot(messageAuthorId);
      }
    } catch (e) {
      console.error(e);
    }
  },
};

export default updootEvent;
