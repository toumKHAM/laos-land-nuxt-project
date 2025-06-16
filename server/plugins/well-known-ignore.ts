export default defineNitroPlugin(() => {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      const msg = args.join(' ');
      const str = '/.well-known/appspecific/com.chrome.devtools.json';
      if (msg.includes(str)) {
        return;
      }
      originalWarn(...args);
    };
});
