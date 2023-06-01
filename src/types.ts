import IntervalTree from "node-interval-tree";

export const VOTE = {
  UPDOOT: "goodcredit",
  DOWNDOOT: "badcredit",
} as const;

const tree = new IntervalTree<string>();
tree.insert(100, 10000, "The People's Chosen");
tree.insert(50, 99, "Bing Chilling");
tree.insert(0, 49, "Common Citizen");
tree.insert(-19, -1, "Defector");
tree.insert(-10000, -20, "Enemy of the State");

export const ROLES = tree;
