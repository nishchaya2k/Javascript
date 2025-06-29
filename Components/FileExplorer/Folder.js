import React, { useState } from 'react'
import { VscNewFile } from "react-icons/vsc";
import { VscNewFolder } from "react-icons/vsc";
import { BsFileEarmarkText } from "react-icons/bs";
import { FcFolder } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";


const Folder = (props) => {

    const { handleInsertNode, handleDeleteNode, handleUpdateNodeName, explorer } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(explorer?.name);
    const [expand, setExpand] = useState(false)
    
    const [showInput, setShowInput] = useState({
        isVisible: false,
        isFolder: null
    })

    
    const handleExpand = () => {
        setExpand((prev) => !prev)
    }

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation()
        setExpand(true)
        setShowInput({
            isVisible: true,
            isFolder
        })
    }

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({ ...showInput, isVisible: false })
        }
    }

    const handleUpdate = (e) => {
        e.stopPropagation()
        setIsEditing(true);
    }

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const updateName = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            setNewName(e.target.value)
            handleUpdateNodeName(explorer.id, newName)
            setIsEditing(false)
        }
    }

    const handleDelete = (e) => {
        e.stopPropagation()
        handleDeleteNode(explorer.id)
        console.log("theek")
    }




    if (!explorer) return null;  //if all root is deleted or explorer is null

    return explorer.isFolder ?   
        (
            <div>
                <div className='flex gap-2' onClick={() => handleExpand()}>

                    {/* For Folder */}
                    <div className='w-52 flex items-center gap-2 overflow-auto p-1 bg-neutral-100 rounded-sm drop-shadow-md cursor-pointer'>
                        <FcFolder />

                        {
                            isEditing ? (<input
                                className='outline-none'
                                value={newName}
                                onChange={handleNameChange}
                                autoFocus
                                onKeyDown={updateName}
                            />) : (
                                <span>{explorer.name}</span>
                            )

                        }

                    </div>

                    {/* Folder Buttons */}
                    <div className='flex gap-1'>

                        <button className='flex justify-center items-center gap-2 px-2 drop-shadow-md leading-normal rounded-sm bg-neutral-100' onClick={(e) => handleNewFolder(e, true)}>
                            <span>Folder</span>
                            <VscNewFolder />
                        </button>

                        <button className='flex justify-center items-center gap-2 px-2 drop-shadow-md rounded-sm bg-neutral-100' onClick={(e) => handleNewFolder(e, false)}>
                            <span>File</span>
                            <VscNewFile />
                        </button>

                        <button className='ml-3 px-1 drop-shadow-md bg-blue-200 rounded-sm' onClick={(e) => handleUpdate(e)}>
                            <FaRegEdit />
                        </button>

                        <button className='px-1 drop-shadow-md bg-red-400 rounded-sm' onClick={(e) => handleDelete(e)}>
                            <RiDeleteBin6Line />
                        </button>

                    </div>
               
                </div>

                {/* File or Folder Input  */}
                {
                    expand && <div className='flex flex-col gap-2'>
                        {
                            showInput.isVisible && (
                                <div className='ml-4 mt-2 flex items-center gap-2 p-0'>
                                    <span>{showInput.isFolder ? <FcFolder /> : <BsFileEarmarkText />}</span>
                                    <input className='text-sm font-thin outline-1 outline-black outline-offset-0 placeholder:text-sm p-1 rounded-sm opacity-80'
                                        onKeyDown={onAddFolder}
                                        onBlur={() => setShowInput({ ...showInput, isVisible: false })}
                                        autoFocus
                                    />
                                </div>
                            )
                        }
                    </div>
                }


                {/* Expand Folder */}
                {
                    expand && explorer.items?.length > 0 && <div className='mt-2 ml-4 flex flex-col gap-2'>
                        {explorer.items.map((exp) => {
                            return <Folder
                                handleInsertNode={handleInsertNode}
                                handleDeleteNode={handleDeleteNode}
                                handleUpdateNodeName={handleUpdateNodeName}
                                explorer={exp} key={exp.id} />
                        })}
                    </div>
                }
            </div>
        ) : (
            <div className='flex gap-1'>

                {/* For File */}
                <div className='w-52 flex items-center gap-2 p-1 rounded-sm drop-shadow-md bg-neutral-100'>
                    <BsFileEarmarkText />
                    {
                        isEditing ? (<input
                            className='outline-none'
                            value={newName}
                            onChange={handleNameChange}
                            autoFocus
                            onKeyDown={updateName}
                        />) : (
                            <span>{explorer.name}</span>
                        )

                    }


                </div>


                {/* File Buttons */}
                <button className=' ml-3 p-1 py-2  drop-shadow-md bg-blue-200 rounded-sm' onClick={(e) => handleUpdate(e)}>
                    <FaRegEdit />
                </button>

                <button className='p-1 py-2 drop-shadow-md bg-red-400 rounded-sm' onClick={(e) => handleDelete(e)}>
                    <RiDeleteBin6Line />
                </button>
            </div>
        )
}

export default Folder
