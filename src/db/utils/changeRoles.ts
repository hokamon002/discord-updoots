import { GuildMember } from "discord.js";
import { ROLES } from "../../types";

export const changeRoles = (
  member: GuildMember,
  score: number,
  prevScore: number | undefined
) => {
  const findRoleId = (score: number) => {
    const botRoleName = ROLES.search(score, score)[0];
    if (!botRoleName) {
      console.error("bug in changeRoles, bot role not found");
      return;
    }
    const guildRoleId = guildRoleNames.get(botRoleName);
    return guildRoleId;
  };

  const guildRoles = member.guild.roles.cache;
  const guildRoleNames = new Map<string, string>();
  guildRoles.forEach((role) => {
    guildRoleNames.set(role.name, role.id);
  });
  if (prevScore !== undefined) {
    const prevRoleId = findRoleId(prevScore);
    if (!prevRoleId) {
      console.error("bug in changeRoles, role id not found");
      return;
    }
    member.roles.remove(prevRoleId);
  }

  const roleId = findRoleId(score);
  if (!roleId) {
    console.error("bug in changeRoles, role id not found");
    return;
  }
  member.roles.add(roleId);
};
