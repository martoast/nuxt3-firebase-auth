export default eventHandler(async (event) => {
  const userCookie = getCookie(event,"userCookie");
  // @ts-ignore
  event.node.req.user = userCookie;
})