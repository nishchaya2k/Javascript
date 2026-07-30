/*
🔹 INTERFACE SEGREGATION PRINCIPLE (ISP)

🔹 What is this?
- Do not force components to depend on things they do not use
- Keep interfaces (props) small and specific

🔹 Core Idea:
Only pass what is needed


-----------------------------------
🔹 Bad Example (ISP broken)
-----------------------------------

function InputField({
  value,
  onChange,
  options,
  onSelect,
  footerAction,
}) {
  return <input value={value} onChange={onChange} />
}

/*
❌ Problems:
- options, onSelect, footerAction not used
- Component forced to accept unnecessary props
- Confusing and hard to maintain



-----------------------------------
🔹 Good Example(ISP followed)
-----------------------------------

    function TextInput({ value, onChange }) {
        return <input value={value} onChange={onChange} />
    }

function SelectInput({ options, onSelect }) {
    return <select>{options }</select >
}


✅ Each component receives only what it needs
✅ Clean and focused interface



-----------------------------------
🔹 Real Example(Your Dropdown Case)
-----------------------------------

    <CustomSearchableDropdown
        options={opts}
        value={value}
        onChange={onChange}
        footerAction={{
            label: 'Add Client',
            onClick: openModal,
        }}
    />

/*
❌ Problem:
- footerAction passed everywhere even when not needed
- Many components don't use this feature
- Interface becomes bloated



-----------------------------------
🔹 Improved Approach(Better ISP)
-----------------------------------

    function CustomSearchableDropdown({
        options,
        value,
        onChange,
        footerAction,
    }) {
        return (
            <div>
                <select value={value} onChange={onChange}>
                    {options}
                </select >

{
    footerAction?(
                    <button onClick = { footerAction.onClick } >
            { footerAction.label }
                    </button>
                ) : null}
            </div >
        )
    }


✅ footerAction is optional
✅ Only used where needed
✅ No forced dependency



-----------------------------------
🔹 When to Split Components
-----------------------------------

    
    ❌ If component starts getting too many props:
    - footerAction
    - async
    - multiSelect
    - creatable
    - grouping
    
    👉 Then split:
    
    <Dropdown />
    <CreatableDropdown />
    <AsyncDropdown />
    


    -----------------------------------
🔹 Key Takeaway
-----------------------------------

    - Keep props minimal and relevant
        - Avoid "one component does everything"
            - Prefer small, focused components


🔥 Golden Rule:
"If a component receives props it does not use,
your design violates ISP"
*/