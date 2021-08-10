module.exports = {
    resolve: `gatsby-plugin-env-variables`,
    options: {
        allowList: [
            "DEPLOY",
            "LIST_PIPELINES",
            "LIST_EXECUTIONS"
        ]
    },
}