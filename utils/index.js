export const redirect = (to, process, Router, res) => {
  if (process.browser) {
    Router.push(to);
  } else {
    res.writeHead(302, {
      location: to
    });
    res.end();
  }
};
