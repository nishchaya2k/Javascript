//will follow the DFS pattern to achieve where to insert add file and folder
//Task: above Algo can be optimize, use DP

const useTraverseTree = () => {

    function insertNode(tree, folderId, item, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            });

            return tree;
        }

        let latestNode = [];
        latestNode = tree.items?.map((ob) => {
            return insertNode(ob, folderId, item, isFolder)
        })

        return { ...tree, items: latestNode }

    }

    const deleteNode = (tree, id,) => {
        if (tree.id === id) {
            return null;
        }

        let updatedList = tree.items?.filter((item) => item.id !== id);


        if (updatedList?.length !== tree.items?.length) {
            return { ...tree, items: updatedList }
        }

        updatedList = tree.items?.map((item) => deleteNode(item, id))

        return { ...tree, items: updatedList };

    }

    const updateNodeName = (tree, id, name) => {

        if (tree.id === id) {
            return { ...tree, name }
        }

        let updatedList = [];

        updatedList = tree.items?.map((item) => updateNodeName(item, id, name))

        return { ...tree, items: updatedList }
    }

    return { insertNode, deleteNode, updateNodeName };
};

export default useTraverseTree;