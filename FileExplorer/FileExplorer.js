import React, { useState } from 'react'
import explorer from "./utils/data"
import Folder from './Folder';
import useTraverseTree from './hooks/use_traverse_tree_hook';

const FileExplorer = () => {

    const [explorerData, setExplorerData] = useState(explorer);

    const { insertNode, deleteNode, updateNodeName } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree)
    }

    const handleDeleteNode = (id) => {
        const finalTree = deleteNode(explorerData, id);
        setExplorerData(finalTree)
    }

    const handleUpdateNodeName = (id, name) => {
        const finalTree = updateNodeName(explorerData, id, name)
        setExplorerData(finalTree)
    }

    return (
        <div className='flex flex-col gap-6'>
            <span className='text-xl font-semibold opacity-75'>File Explorer</span>
            <Folder
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleUpdateNodeName={handleUpdateNodeName}
                explorer={explorerData} />
        </div>
    )
}

export default FileExplorer
