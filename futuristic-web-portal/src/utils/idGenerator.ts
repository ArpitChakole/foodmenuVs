export const generateUniqueId = (): string => {
    return 'pkg-' + Math.random().toString(36).substr(2, 9);
};