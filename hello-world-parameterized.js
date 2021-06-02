module.exports = {
    name: "Action Demo Parameterized",
    description: "This is a demo action",
    key: "action_demo_parameterized",
    version: "0.0.1",
    type: "action",
    props: {
        name: {
            type: "string",
            label: "Name",
        }
    },
    async run() {
        return `hello world!`
    },
}
