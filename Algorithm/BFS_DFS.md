# BFS & DFS + Tree

잊어버린 알고리즘 지식들을 다시 찾기 위해...

## Tree

- 계층 관계를 가진 자료 구조(그래프 형태로 나타낼 수 있음)
- 각 노드가 최대 두개의 자식 노드를 갖는 `이진 트리` 형태가 많이 사용됨
- Root : 최상단 노드
- Leaf Node : 자식이 없는 노드
- Depth : 루트에서 특정 노드까지 거리.
- Height : 트리의 최대 깊이

```java
class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BinaryTree {

    TreeNode root;

    public void inorder(TreeNode node) { // Inorder 순회 (왼쪽 - 루트 - 오른쪽)
        if (node == null) return;

        inorder(node.left);
        System.out.print(node.val + " ");
        inorder(node.right);
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.root = new TreeNode(1);
        tree.root.left = new TreeNode(2);
        tree.root.right = new TreeNode(3);
        tree.root.left.left = new TreeNode(4);
        tree.root.left.right = new TreeNode(5);

        System.out.print("Inorder 결과: ");
        tree.inorder(tree.root);
    }
}
```

## BFS (Bredath-Frist Search)

> 너비 우선 탐색
> 가까운 노드부터 탐색. `Queue(FIFO)` 사용

- Level Order (같은 깊이 먼저 방문)
- Queue -> LinkedList
- 최단 경로 탐색 시 활용

## DFS (Depth-First Search)

> 깊이 우선 탐색
> 한 방향으로 갈 수 있을 때까지 탐색
> Stack, 재귀 사용

- Tree의 Preorder, Inorder, Postorder 탐색에서 활용
- 백트래킹 문제에서 자주 사용
- 경로 탐색, 미로 찾기 등에서 활용
