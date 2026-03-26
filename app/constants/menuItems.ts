type HeaderThemeType = {
  logo: {
    fill1: string;
    fill2: string;
    fill3: string;
    fill4: string;
  };
  menuButton: {
    shadow: string;
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
    iconFill: string;
  };
};

export const defaultTheme: HeaderThemeType = {
  logo: {
    fill1: "#107569",
    fill2: "#4BB8B2",
    fill3: "#109383",
    fill4: "#31D3B7",
  },
  menuButton: {
    shadow:
      "inset 0 -1.441px 7.351px 0 #15B79E, 0 1.441px 8.649px 0 rgba(18,93,86,0.50)",
    from: "#15B79E",
    to: "#125D56",
    hoverFrom: "#125D56",
    hoverTo: "#15B79E",
    iconFill: "#FFFFFF",
  },
};

export const headerThemeByPath: Record<string, HeaderThemeType> = {
  "/": {
    logo: {
      fill1: "#107569",
      fill2: "#4BB8B2",
      fill3: "#109383",
      fill4: "#31D3B7",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #15B79E, 0 1.441px 8.649px 0 rgba(18, 93, 86, 0.5)",
      from: "#15B79E",
      to: "#125D56",
      hoverFrom: "#125D56",
      hoverTo: "#15B79E",
      iconFill: "#FFFFFF",
    },
  },
  // "/platform-overview": {
  //   logo: {
  //     fill1: "#164C63",
  //     fill2: "#22CCEE",
  //     fill3: "#088AB2",
  //     fill4: "#67E3F9",
  //   },
  //   menuButton: {
  //     shadow:
  //       "inset 0 -1.441px 7.351px 0 #22CCEE, 0 1.441px 8.649px 0 rgba(34,204,238,0.50)",
  //     from: "#22CCEE",
  //     to: "#088AB2",
  //     hoverFrom: "#088AB2",
  //     hoverTo: "#22CCEE",
  //     iconFill: "#FFFFFF",
  //   },
  // },
  // "/why-insur-md": {
  //   logo: {
  //     fill1: "#4C2A63",
  //     fill2: "#C86BFA",
  //     fill3: "#8A3AB2",
  //     fill4: "#E7C4FF",
  //   },
  //   menuButton: {
  //     shadow:
  //       "inset 0 -1.441px 7.351px 0 #C86BFA, 0 1.441px 8.649px 0 rgba(138,58,178,0.45)",
  //     from: "#C86BFA",
  //     to: "#8A3AB2",
  //     hoverFrom: "#8A3AB2",
  //     hoverTo: "#C86BFA",
  //     iconFill: "#FFFFFF",
  //   },
  // },
  // "/how-it-works": {
  //   logo: {
  //     fill1: "#5C4A12",
  //     fill2: "#F5C542",
  //     fill3: "#C99700",
  //     fill4: "#FFE8A3",
  //   },
  //   menuButton: {
  //     shadow:
  //       "inset 0 -1.441px 7.351px 0 #F5C542, 0 1.441px 8.649px 0 rgba(201,151,0,0.40)",
  //     from: "#F5C542",
  //     to: "#C99700",
  //     hoverFrom: "#C99700",
  //     hoverTo: "#F5C542",
  //     iconFill: "#FFFFFF",
  //   },
  // },
  "/integrations-api": {
    logo: {
      fill1: "#89123E",
      fill2: "#FD6F8E",
      fill3: "#E31B54",
      fill4: "#E31B54",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #FD6F8E, 0 1.441px 8.649px 0 rgba(192,16,72,0.45)",
      from: "#FD6F8E",
      to: "#FD6F8E",
      hoverFrom: "#FD6F8E",
      hoverTo: "#FD6F8E",
      iconFill: "#FFFFFF",
    },
  },
  "/underwriting-teams": {
    logo: {
      fill1: "#164C63",
      fill2: "#22CCEE",
      fill3: "#088AB2",
      fill4: "#67E3F9",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #22CCEE, 0 1.441px 24.649px 0 rgba(14,12,144,0.45)",
      from: "#22CCEE",
      to: "#0E7090",
      hoverFrom: "#0E7090",
      hoverTo: "#22CCEE",
      iconFill: "#FFFFFF",
    },
  },
  "/reinsurers": {
    logo: {
      fill1: "#0040C1",
      fill2: "#528BFF",
      fill3: "#155EEF",
      fill4: "#84ADFF",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #2970FF, 0 1.441px 24.649px 0 rgba(0,64,193,0.45)",
      from: "#2970FF",
      to: "#0040C1",
      hoverFrom: "#0040C1",
      hoverTo: "#2970FF",
      iconFill: "#FFFFFF",
    },
  },
};
