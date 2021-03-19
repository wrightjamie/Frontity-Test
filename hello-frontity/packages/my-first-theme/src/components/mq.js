const breakpoints = [700]

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
)

export default mq;