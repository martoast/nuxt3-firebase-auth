export default eventHandler(async (event) => {
    if(event.node.req.method !== 'POST') return 'Must be post request'
    const user = await readBody(event)

    // @ts-ignore
    event.node.req.user = user.user;
    
    return { user }
})
