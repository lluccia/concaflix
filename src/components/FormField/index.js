import React from "react";

function FormField({label, type, name, value, onChange}) {
    const tag = type === 'textarea' ? 'textarea': 'input';

    const element = React.createElement(
        tag,
        {
            type: type,
            value: value,
            name: name,
            onChange: onChange
        });

    return (
        <div>
            <label>
                {label}:
                {element}
            </label>
        </div>
    );
}

export default FormField;