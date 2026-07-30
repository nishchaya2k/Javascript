/*
🔹 OPEN / CLOSED PRINCIPLE (OCP)

🔹 What is this?
- Code should be OPEN for extension
- Code should be CLOSED for modification

🔹 Core Idea:
Add new features WITHOUT changing existing code


-----------------------------------
🔹 Bad Example (OCP broken)
-----------------------------------

function FieldRenderer({ field }) {
  if (field.type === 'text') {
    return <input type="text" />
  }

  if (field.type === 'date') {
    return <input type="date" />
  }

  if (field.type === 'select') {
    return <select></select>
  }
}

❌ Problems:
- Adding new field requires modifying this function
- Code keeps growing with if-else
- High chance of breaking existing logic


-----------------------------------
🔹 Good Example (OCP followed)
-----------------------------------

const FIELD_DEFS = {
  text: (props) => <input type="text" {...props} />,
  date: (props) => <input type="date" {...props} />,
  select: (props) => <select {...props}></select>,
}

function FieldRenderer({ field }) {
  const Component = FIELD_DEFS[field.type]
  return Component ? <Component /> : null
}


-----------------------------------
🔹 Extending without modifying
-----------------------------------

FIELD_DEFS.email = (props) => <input type="email" {...props} />
FIELD_DEFS.phone = (props) => <input type="tel" {...props} />

✅ No change in FieldRenderer
✅ Only extension


-----------------------------------
🔹 Real Example (Your Project Pattern)
-----------------------------------

export const FIELD_DEFS = {
  text: {
    render: ({ value, onChange }) => (
      <input value={value} onChange={onChange} />
    ),
  },
}

function getFieldDef(type) {
  return FIELD_DEFS[type] || FIELD_DEFS.text
}

function FieldRenderer({ field, value, setValue }) {
  const def = getFieldDef(field.type)

  return def.render({
    value,
    onChange: (v) => setValue(field.key, v),
  })
}


-----------------------------------
🔹 Adding New Field (No modification)
-----------------------------------

FIELD_DEFS.currency = {
  render: ({ value, onChange }) => (
    <input type="number" value={value} onChange={onChange} />
  ),
}

✅ FieldRenderer unchanged
✅ Only FIELD_DEFS extended


-----------------------------------
🔹 Key Takeaway
-----------------------------------

- Avoid if-else / switch for behavior changes
- Use maps / config (like FIELD_DEFS)
- Extend system instead of modifying core logic

🔥 Golden Rule:
"If adding a new feature requires editing old code,
your design is NOT following OCP"
*/