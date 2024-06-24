const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "myText.txt",
                    isFolder: false,
                }
            ]
        },
        {
            id: "4",
            name: "src",
            isFolder: true,
            items: []
        },
        {
            id: "5",
            name: "package.json",
            isFolder: false,
        }
    ]
}

export default explorer;