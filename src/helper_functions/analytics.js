const analytics = {
  track: (args) => {
    if (!!window.gtag) {
      if (args) {
        window.gtag("event", args.action, {
          event_category: args.category,
          event_label: args.label,
        });
        console.log("Tracking Event:", args);
      }
    } else {
      console.log("Error: gtag not instantiated.");
    }
  },
};

export default analytics;
