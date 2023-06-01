import IntervalTree from "node-interval-tree";

export const VOTE = {
  UPDOOT: "goodcredit",
  DOWNDOOT: "badcredit",
} as const;

type TRole = { name: string; threshold: number };

// export const ROLES: TRole[] = [
//   { name: "The People's Chosen", threshold: 100 },
//   { name: "Bing Chilling", threshold: 50 },
//   { name: "Common Citizen", threshold: 0 },
//   { name: "Defector", threshold: -10 },
//   { name: "Enemy of the State", threshold: -20 },
// ];

// export const ROLES: TRole[] = [
//   { name: "tier 1", threshold: 1 },
//   { name: "tier 2", threshold: 0 },
//   { name: "tier 3", threshold: -1 },
// ];

const tree = new IntervalTree<string>();
tree.insert(2, 2, "tier 1");
tree.insert(1, 1, "tier 2");
tree.insert(0, 0, "tier 3");
tree.insert(-1, -1, "tier 4");
tree.insert(-2, -2, "tier 5");

export const ROLES = tree;
