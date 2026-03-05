// Simple API endpoint to list available frames
// This can be called from MatchaSequence.jsx if needed

export function getFrameList() {
    const frameNames = Array.from({ length: 120 }, (_, i) => {
        const num = String(i + 1).padStart(3, "0");
        return `ezgif-frame-${num}.jpg`;
    });
    return frameNames;
}

// If using a server later, this would be an actual API endpoint
// For now, this is a utility function
