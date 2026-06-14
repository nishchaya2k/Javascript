/*
========================================
BINARY TREE
========================================

🔹 Definition

1. Meaning
   a. A Binary Tree is a hierarchical data structure.
   b. Each node can have at most 2 children.
   c. These children are called:
      i. Left Child
      ii. Right Child

2. Purpose
   a. Represents data in a hierarchical manner.
   b. Unlike Arrays and Linked Lists, data is not stored linearly.

3. Real-Life Examples
   a. File System
   b. Organization Hierarchy
   c. Family Tree

----------------------------------------

🔹 Basic Terminology

1. Root Node
   a. The topmost node of the tree.

2. Parent Node
   a. A node that has one or more children.

3. Child Node
   a. A node connected below a parent node.

4. Leaf Node
   a. A node with no children.

5. Internal Node
   a. Any non-leaf node.

6. Level
   a. Position of a node from the root.

7. Depth
   a. Number of edges from the root to a node.

8. Height
   a. Number of edges on the longest path
      from a node to a leaf.
   b. Height of the tree = Height of the root node.

9. Subtree
   a. Any node together with all of its descendants.

----------------------------------------

🔹 Full Binary Tree

1. Rule
   a. Every node has either:
      i. 0 children
      ii. 2 children

2. Restriction
   a. No node can have exactly 1 child.

3. Benefit
   a. Creates a more predictable structure.

----------------------------------------

🔹 Complete Binary Tree

1. Rule
   a. All levels are completely filled
      except possibly the last level.
   b. Nodes on the last level are filled
      from left to right.

2. Benefit
   a. Efficient utilization of space.

----------------------------------------

🔹 Perfect Binary Tree

1. Rule
   a. Every internal node has exactly 2 children.
   b. All leaf nodes are at the same level.

2. Result
   a. Every level is completely filled.

3. Benefit
   a. Maximum node utilization.
   b. Fully balanced structure.

----------------------------------------

🔹 Balanced Binary Tree

1. Rule
   a. Left and right subtrees should remain
      approximately balanced.
   b. The tree should not become heavily skewed.

2. Goal
   a. Keep tree height close to minimum.
   b. Maintain efficient operations.

3. Note
   a. Height difference ≤ 1 is a rule of
      AVL Trees, not all Balanced Trees.

----------------------------------------

🔹 Degenerate (Skewed) Tree

1. Rule
   a. Every node has only one child.

2. Structure
   a. Resembles a Linked List.

3. Drawback
   a. Loses the advantages of a tree.
   b. Search and traversal become inefficient.

----------------------------------------

🔹 Important Relationships

1. Perfect Tree vs Full Tree
   a. Every Perfect Tree is a Full Tree.
   b. Every Full Tree is NOT a Perfect Tree.

2. Complete Tree vs Perfect Tree

   a. Complete Tree
      i. Last level may not be completely filled.
      ii. Nodes must fill from left to right.

   b. Perfect Tree
      i. Every level is completely filled.
      ii. All leaf nodes are at the same level.

----------------------------------------

🔹 Summary

1. Binary Trees store data hierarchically.

2. Each node can have a maximum of 2 children.

3. Important Components
   a. Root Node
   b. Parent Node
   c. Child Node
   d. Leaf Node
   e. Internal Node
   f. Height
   g. Depth
   h. Subtree

4. Common Binary Tree Types
   a. Full Binary Tree
   b. Complete Binary Tree
   c. Perfect Binary Tree
   d. Balanced Binary Tree
   e. Degenerate (Skewed) Tree

5. A well-balanced tree generally provides
   better performance than a skewed tree.
*/