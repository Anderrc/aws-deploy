<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Install dependencies.**

    Use npm for install dependencies

    ```shell
    # create a new Gatsby site using the minimal starter
    npm install
    ```

2.  **Create file environments variables**

    Create file with environment variables in src/env/

    ```shell
    DEPLOY= <endpoint_to_lambda_deploy>
    LIST_PIPELINES=<endpoint_to_lambda_list_pipelines>
    LIST_EXECUTIONS=<endpoint_to_lambda_list_executions_to pipelines>
    LOCATION_LOGS=<endpoint_folder_location_logs>
    SAVE_LOGS=<endpoint_register_logs>
    ```

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```
