type Last<T extends any[]> = [0, ...T][T['length']]

export { Last }
