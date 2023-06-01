import { Events, MessageReaction, User } from "discord.js";
import { VOTE } from "../types";
import { kv } from "../db/updootController";

const updootRemovedEvent = {
  name: Events.MessageReactionRemove,
  async execute(reaction: MessageReaction, _user: User) {
    try {
      const messageAuthorId = reaction.message.author?.id;
      if (!messageAuthorId) {
        throw "author of message not found";
      }

      if (reaction.emoji.name === VOTE.UPDOOT) {
        await kv.decreaseUpdoot(messageAuthorId);
      }
      if (reaction.emoji.name === VOTE.DOWNDOOT) {
        await kv.increaseUpdoot(messageAuthorId);
      }
    } catch (e) {
      console.error(e);
    }
  },
};

export default updootRemovedEvent;
