/*
🔹 DEPENDENCY INVERSION PRINCIPLE (DIP)

🔹 What is this?
- High-level modules (components) should not depend on low-level modules (API)
- Both should depend on abstraction

🔹 Core Idea:
Component should consume data, not control how it is fetched


-----------------------------------
🔹 Bad Example (DIP broken)
-----------------------------------

function ProjectList() {
  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then(setProjects)
  }, [])

  return <div>{projects.length}</div>
}


❌ Problems:
- Component directly depends on API
- Hard to test
- Changing API will break component



-----------------------------------
🔹 Better Example(Using API layer)
-----------------------------------

    function fetchProjects() {
        return fetch('/api/projects').then((res) => res.json())
    }

function ProjectList() {
    const [projects, setProjects] = React.useState([])

    React.useEffect(() => {
        fetchProjects().then(setProjects)
    }, [])

    return <div>{projects.length}</div>
}


✅ API logic separated
✅ Component cleaner
❗ Still tightly coupled to fetchProjects



-----------------------------------
🔹 Good Example(DIP followed)
-----------------------------------

    function ProjectList({ getProjects }) {
        const [projects, setProjects] = React.useState([])

        React.useEffect(() => {
            getProjects().then(setProjects)
        }, [getProjects])

        return <div>{projects.length}</div>
    }


Usage:
<ProjectList getProjects={fetchProjects} />



✅ Component depends on abstraction (getProjects)
✅ API can be replaced easily



-----------------------------------
🔹 Using Custom Hook(Your Pattern)
-----------------------------------

    function useProjects() {
        const [data, setData] = React.useState([])

        React.useEffect(() => {
            fetch('/api/projects')
                .then((res) => res.json())
                .then(setData)
        }, [])

        return data
    }

function ProjectList() {
    const projects = useProjects()
    return <div>{projects.length}</div>
}


✅ Component does not know API
✅ Logic moved to hook
✅ Clean separation



-----------------------------------
🔹 Real Example(Your Form System)
-----------------------------------

    
    ❌ DIP Violation
    

    FIELD_DEFS.clientPicker = {
    render: () => {
        fetch('/api/clients') // ❌ direct API call inside UI
    },
}



✅ DIP Followed


function getClients() {
    return fetch('/api/clients').then(res => res.json())
}

FIELD_DEFS.clientPicker = {
    render: ({ context }) => {
        const { clientOptions } = context
        return <Dropdown options={clientOptions} />
    },
}


Component providing abstraction:


const fieldContext = {
    clientOptions: [...],
    getClients, // abstraction
}


✅ UI depends on context (abstraction)
✅ API logic separated



-----------------------------------
🔹 Key Takeaway
-----------------------------------

    - Do not call APIs directly inside components
        - Use abstraction(function / hook / context / redux)
            - Component should only consume data


🔥 Golden Rule:
"If changing API forces changes in your component,
your design violates DIP"
*/