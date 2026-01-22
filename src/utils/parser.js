export const generateSimulation = (code) => {
    // Split by newline but keep index tracked
    const lines = code.split("\n");
    const steps = [];
    let currentStack = [];
    let stepId = 1;

    // Stack Pointer Start Address (Decimal value of 0x7FFFFFFF)
    let stackPointer = 2147483647;

    lines.forEach((line, index) => {
        const originalLineNumber = index + 1;
        const cleanLine = line.trim();

        if (!cleanLine) return; // Skip empty lines

        // Remove comments
        const codePart = cleanLine.split("//")[0].trim();
        if (!codePart) return; // Skip comment-only lines

        let match;
        let newStack = [...currentStack];
        let isValidStep = false;

        // Regex definitions
        const stringArrayRegex = /^char\s+(\w+)\[\s*\]\s*=\s*"([^"]*)";$/;
        const declRegex = /^(int|char)\s+(\w+)\s*=\s*(.+);$/;
        const assignRegex = /^(\w+)\s*=\s*(.+);$/;

        if ((match = codePart.match(stringArrayRegex))) {
            const [_, name, stringVal] = match;
            const chars = stringVal.split('');
            chars.push('\\0'); // Null terminator

            chars.forEach((char, charIndex) => {
                // Decrement stack pointer (1 byte per char)
                stackPointer -= 1;
                const addressHex = "0x" + stackPointer.toString(16).toUpperCase();

                newStack.push({
                    name: `${name}[${charIndex}]`,
                    type: 'char',
                    value: char === '\\0' ? '\\0' : `'${char}'`,
                    address: addressHex,
                    size: '1 byte'
                });
            });
            isValidStep = true;
        } else if ((match = codePart.match(declRegex))) {
            const [_, type, name, value] = match;

            const byteSize = type === 'int' ? 4 : 1;
            // Decrement stack pointer (Stack grows down)
            stackPointer -= byteSize;

            const addressHex = "0x" + stackPointer.toString(16).toUpperCase();
            const sizeStr = type === 'int' ? "4 bytes" : "1 byte"; // Singular 'byte' for char if 1

            newStack.push({
                name,
                type,
                value: value.trim(),
                address: addressHex,
                size: sizeStr
            });
            isValidStep = true;
        } else if ((match = codePart.match(assignRegex))) {
            const [_, name, value] = match;
            const stackIndex = newStack.findIndex((v) => v.name === name);
            if (stackIndex !== -1) {
                newStack[stackIndex] = { ...newStack[stackIndex], value: value.trim() };
                isValidStep = true;
            }
            // If variable not found, we ignore it (per "error resilience" requirement)
        }
        // If not matching either regex, we ignore the line (per "error resilience")

        if (isValidStep) {
            currentStack = newStack;
            steps.push({
                step_id: stepId++,
                code_executed: codePart,
                line_number: originalLineNumber,
                stack_state: JSON.parse(JSON.stringify(currentStack)),
            });
        }
    });

    return { steps };
};
