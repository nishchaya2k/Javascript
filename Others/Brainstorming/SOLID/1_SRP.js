/*
🔹 SINGLE RESPONSIBILITY PRINCIPLE (SRP)

🔹 What is this?
- A module/component should have only ONE responsibility
- It should have only ONE reason to change

🔹 Core Idea:
One component = one job */


/*-----------------------------------
🔹 Bad Example (Multiple responsibilities)
-----------------------------------*/


function ProjectForm() {
  const [data, setData] = React.useState({})

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value })
  }

  const validate = () => {
    if (!data.name) return "Name required"
  }

  const handleSubmit = async () => {
    const error = validate()
    if (error) return

    await fetch('/api/project', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  return <button onClick={handleSubmit}>Submit</button>
}

/*-❌ Problems:
- UI + state + validation + API in one place
- Multiple reasons to change-*/

/*------------------------------------
🔹 Good Example (SRP followed)
------------------------------------*/

// UI
function ProjectFormView({ onSubmit }) {
  return <button onClick={onSubmit}>Submit</button>
}

// Validation
function validateProject(data) {
  if (!data.name) return "Name required"
}

// API
async function createProject(data) {
  return fetch('/api/project', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// Logic
function ProjectForm() {
  const [data, setData] = React.useState({})

  const handleSubmit = async () => {
    const error = validateProject(data)
    if (error) return

    await createProject(data)
  }

  return <ProjectFormView onSubmit={handleSubmit} />
}

/*✅ Each part has one responsibility*/
