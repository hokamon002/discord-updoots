import { Events, MessageReaction, User } from "discord.js";
import { VOTE } from "../types";
import { kv } from "../db/updootController";
import { changeRoles } from "../db/utils/changeRoles";

const updootEvent = {
  name: Events.MessageReactionAdd,
  async execute(reaction: MessageReaction, _user: User) {
    try {
      const messageAuthorId = reaction.message.author?.id;
      if (!messageAuthorId) {
        throw "author of message not found";
      }

      const guild = await reaction.message.guild?.fetch();
      const member = guild?.members.cache.get(messageAuthorId);

      if (!member) {
        throw "member not found";
      }

      let score = 0;
      const previousScore = await kv.getUpdoot(messageAuthorId);

      if (reaction.emoji.name === VOTE.UPDOOT) {
        score = await kv.increaseUpdoot(messageAuthorId);
      }
      if (reaction.emoji.name === VOTE.DOWNDOOT) {
        score = await kv.decreaseUpdoot(messageAuthorId);
      }
      changeRoles(member, score, previousScore);
    } catch (e) {
      console.error(e);
    }
  },
};

export default updootEvent;
