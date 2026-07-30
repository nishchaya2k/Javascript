/*
===============================
🔹 SOLID PRINCIPLES (REVISION)
===============================


-----------------------------------
🔹 1. SINGLE RESPONSIBILITY (SRP)
-----------------------------------

Definition:
- One component/module = one responsibility

Core Idea:
- One reason to change

Example:

❌ Bad:
function ProjectForm() {
  // UI + validation + API
}

✅ Good:
ProjectFormView        // UI
validateProject        // validation
createProjectAPI       // API

👉 Keep logic separated


-----------------------------------
🔹 2. OPEN / CLOSED (OCP)
-----------------------------------

Definition:
- Open for extension
- Closed for modification

Core Idea:
- Add new features without changing existing code

Example:

❌ Bad:
if (type === 'text') ...
if (type === 'date') ...

✅ Good:
const FIELD_DEFS = {
  text: ...,
  date: ...,
}

👉 Add new type without touching old code


-----------------------------------
🔹 3. LISKOV SUBSTITUTION (LSP)
-----------------------------------

Definition:
- Replace one component with another without breaking behavior

Core Idea:
- Follow same contract

Example:

❌ Bad:
function BrokenInput({ value }) { ... }

✅ Good:
function TextInput({ value, onChange }) { ... }
function EmailInput({ value, onChange }) { ... }

👉 All implementations behave same


-----------------------------------
🔹 4. INTERFACE SEGREGATION (ISP)
-----------------------------------

Definition:
- Do not force components to accept unused props

Core Idea:
- Keep interfaces small

Example:

❌ Bad:
<Input value onChange options footerAction />

✅ Good:
<TextInput value onChange />
<SelectInput options onSelect />

👉 Only pass what is needed


-----------------------------------
🔹 5. DEPENDENCY INVERSION (DIP)
-----------------------------------

Definition:
- High-level should not depend on low-level (API)

Core Idea:
- Depend on abstraction

Example:

❌ Bad:
fetch('/api/projects') inside component

✅ Good:
useProjects() / getProjects()

👉 Component only consumes data


-----------------------------------
🔹 FINAL GOLDEN RULES
-----------------------------------

SRP → Do one thing
OCP → Extend, don’t modify
LSP → Don’t break contract
ISP → Keep props minimal
DIP → Don’t depend on implementation


-----------------------------------
🔹 FRONTEND MAPPING (YOUR PROJECT)
-----------------------------------

SRP → Separate form, validation, API
OCP → FIELD_DEFS registry
LSP → All fields follow (value, onChange)
ISP → Avoid extra props (footerAction everywhere)
DIP → Use hooks / context / API layer

*/