module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./lib/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#1C2E5E",
                orange: "#DC7138",
                black: "#000000",
                white: "#FFFFFF",
                "gray-dark": "#333333",
                "gray-middle": "#777777",
                "gray-light": "#F9FAFB",
                "gray-disabled": "#C4CBD0",

                // Color 1
                gray01: "#393a3d",
                gray02: "#6b6c72",
                gray03: "#8d9096",
                gray04: "#babec5",
                gray05: "#d4d7dc",
                gray06: "#e3e5ed",
                gray07: "#eceef1",
                gray08: "#f4f5f8",

                blue01: '#055393',
                blue02: '#0077c5',
                blue03: '#0097e6',
                blue04: '#21abf6',
                blue05: '#34bfff',

                // Color 2
                blueberry0: "#f4f9ff",
                blueberry10: "#e0edff",
                blueberry20: "#c5e1ff",
                blueberry30: "#a0cfff",
                blueberry40: "#7cbcff",
                blueberry50: "#5dabff",
                blueberry60: "#3492ef",
                blueberry70: "#2b77cc",
                blueberry80: "#205ea3",
                blueberry90: "#17497f",
                blueberry100: "#103661",
                blueberry110: "#00254a",
                blueberry120: "#001d3c",
                agave0: "#f0fdff",
                agave10: "#e1f9ff",
                agave20: "#c2f5ff",
                agave30: "#81f2fe",
                agave40: "#38e8f6",
                agave50: "#00d0e0",
                agave60: "#00b3c2",
                agave70: "#009eac",
                agave80: "#00828d",
                agave90: "#006771",
                agave100: "#005056",
                agave110: "#003c42",
                agave120: "#002a2e",
                spearmint0: "#ecfff7",
                spearmint10: "#d7fdef",
                spearmint20: "#a6fde2",
                spearmint30: "#50fbd4",
                spearmint40: "#00eec5",
                spearmint50: "#00d5b0",
                spearmint60: "#00b797",
                spearmint70: "#00a286",
                spearmint80: "#00856d",
                spearmint90: "#006a56",
                spearmint100: "#005244",
                spearmint110: "#003e31",
                spearmint120: "#002b21",
                kiwi0: "#effff0",
                kiwi10: "#d8ffdb",
                kiwi20: "#afffb9",
                kiwi30: "#7ffa94",
                kiwi40: "#5bef76",
                kiwi50: "#3bd85e",
                kiwi60: "#00bb42",
                kiwi70: "#00a63b",
                kiwi80: "#00892e",
                kiwi90: "#006c23",
                kiwi100: "#005419",
                kiwi110: "#004012",
                kiwi120: "#002c09",
                olive0: "#f3ffe3",
                olive10: "#e7fdc8",
                olive20: "#d3fa90",
                olive30: "#c5ef71",
                olive40: "#b9e15e",
                olive50: "#a1cc3b",
                olive60: "#86b000",
                olive70: "#769c00",
                olive80: "#618000",
                olive90: "#4c6600",
                olive100: "#3a4f00",
                olive110: "#2b3b00",
                olive120: "#1d2900",
                honey0: "#fffbe9",
                honey10: "#fff2c1",
                honey20: "#fde68c",
                honey30: "#fedb5e",
                honey40: "#f9c741",
                honey50: "#eda700",
                honey60: "#d99001",
                honey70: "#c27a00",
                honey80: "#ac6500",
                honey90: "#8d4d00",
                honey100: "#703a00",
                honey110: "#562a00",
                honey120: "#3e1c00",
                persimmon0: "#fff7ec",
                persimmon10: "#ffeac7",
                persimmon20: "#ffd8a0",
                persimmon30: "#ffbe6f",
                persimmon40: "#fca354",
                persimmon50: "#f88a42",
                persimmon60: "#e56c1d",
                persimmon70: "#c84f00",
                persimmon80: "#a53900",
                persimmon90: "#832900",
                persimmon100: "#651e00",
                persimmon110: "#481200",
                persimmon120: "#390e00",
                watermelon0: "#fff6f6",
                watermelon10: "#ffe7e7",
                watermelon20: "#ffd4d8",
                watermelon30: "#ffb8be",
                watermelon40: "#ff9ba4",
                watermelon50: "#ff808c",
                watermelon60: "#f7576c",
                watermelon70: "#db334d",
                watermelon80: "#b61a37",
                watermelon90: "#8f1229",
                watermelon100: "#6e0b1e",
                watermelon110: "#4f0513",
                watermelon120: "#40030e",
                dragonfruit0: "#fff5fb",
                dragonfruit10: "#ffe6f4",
                dragonfruit20: "#ffd1e9",
                dragonfruit30: "#ffb5df",
                dragonfruit40: "#ff95d3",
                dragonfruit50: "#ff77c7",
                dragonfruit60: "#f54bac",
                dragonfruit70: "#d72792",
                dragonfruit80: "#b30078",
                dragonfruit90: "#8d005d",
                dragonfruit100: "#6c0046",
                dragonfruit110: "#4d0031",
                dragonfruit120: "#3f0027",
                eggplant0: "#f9f7ff",
                eggplant10: "#f0e9ff",
                eggplant20: "#e2d9ff",
                eggplant30: "#d0c2ff",
                eggplant40: "#c0abff",
                eggplant50: "#b496ff",
                eggplant60: "#a275ff",
                eggplant70: "#8f4bff",
                eggplant80: "#7c00f6",
                eggplant90: "#6100c2",
                eggplant100: "#490097",
                eggplant110: "#33006e",
                eggplant120: "#28005a",
                pepper0: "#f0f4f6",
                pepper10: "#e2e9ed",
                pepper20: "#d5dee3",
                pepper30: "#c3ced5",
                pepper40: "#adbac2",
                pepper50: "#9aa7b0",
                pepper60: "#859299",
                pepper70: "#727e85",
                pepper80: "#5d686f",
                pepper90: "#4c555b",
                pepper100: "#3c4348",
                pepper110: "#2b3135",
                pepper120: "#21262a",
                pepper130: "#181c1f",

                // Extended colors
                fig100: "#275582",
                fig110: "#1a3d5f",
                fig120: "#14324f",
                plum100: "#564b7d",
                plum110: "#3f365c",
                plum120: "#342c4c",
                kale100: "#325f6b",
                kale110: "#244750",
                kale120: "#19343b",
                basil100: "#315b41",
                basil110: "#274933",
                basil120: "#1c3525",
                tofu100: "#f4f4ef",
                tofu110: "#eaeae3",
                tofu120: "#dfdfd8",
                wintermint100: "#eff4f9",
                wintermint110: "#e4ebf3",
                wintermint120: "#d1dee9",
                nutmeg100: "#f6f3f3",
                nutmeg110: "#ede7e8",
                nutmeg120: "#dfd4d8",
                cardamom100: "#ecf6ef",
                cardamom110: "#ddece1",
                cardamom120: "#d1e0d6",
                ice100: "#eaf6f7",
                ice110: "#d5ecef",
                ice120: "#bee3e7",

                // Logo colors
                logointuit: "#236cff",
                logoquickbooks: "#2ca01c",
                logoturbotax: "#d52b1e",
                logomint: "#00a38f",
                logocreditkarma: "#2e971a",
                logomailchimp: "#ffe01b",

                // Skin colors
                skin100: "#fbe4ca",
                skin110: "#f8d4ab",
                skin120: "#f9dcb2",
                skin130: "#f5cd91",
                skin140: "#e1a373",
                skin150: "#d2854a",
                skin160: "#a15f3c",
                skin170: "#7a3f20",
                skin180: "#5f3927",
                skin190: "#4a2411",
            },
            fontFamily: {
                sans: ["Avenir Next forINTUIT", "helvetica", "sans-serif"],
            },
            fontSize: {
                sm: ["14px", "22px"],
                base: ["16px", "24px"],
                lg: ["18px", "24px"],
                xl: ["24px", "30px"],
                "2xl": ["34px", "40px"],
                "3xl": ["48px", "64px"],
            },
            backgroundImage: {
                hero: "url('https://a.mktgcdn.com/p/zLdSJhB5bxsOkKegHhmFSwwRqwcWvs0n1SY64JpxXw8/2680x1600.jpg')",
            },
        },
    },
    plugins: [],
};
