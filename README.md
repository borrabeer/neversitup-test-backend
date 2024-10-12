# Project Folder Structure

```
nestjs/
├── src/
│   ├── config/
│   │   ├── typeorm.ts
│   │   ├── main.ts
│   │   ├── index.ts    
│   │   └── modules/
│   │       ├── config.module.ts
│   │       ├── logger.module.ts
│   │       ├── typeorm.module.ts
│   │       └── jwt.module.ts
│   ├── database/
│   │   └── migrations/
│   ├── modules/
│   │   └── */
│   │       ├── dto/
│   │       │   ├── *.requests.dto.ts
│   │       │   └── *.responses.dto.ts
│   │       ├── tests/
│   │       │   ├── *.controller.spec.ts
│   │       │   ├── *.service.spec.ts
│   │       │   └── *.e2e.spec.ts
│   │       ├── *.controller.ts
│   │       ├── *.interface.ts
│   │       ├── *.service.ts
│   │       └── *.module.ts
│   ├── utils/
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   └── pipes/
│   ├── app.module.ts
│   ├── main.ts
│   └── repl.ts
├── tests/
│   └── fixtures/
├── husky/
├── .env.*
├── .eslintrc.js
├── .gitignore
├── .dockerignore
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── Makefile
├── nest-cli.json
├── README.md
└── package.json
```

- `src/`: Contains the source code of the application.
  - `config/`: Contains the configuration of the application or 3rd party modules.
    - `modules/`: Contains the configuration of the 3rd party modules.
  - `database/`: Contains the migration files of the data model.
  - `modules/`: Defines the data model into module.
    - `*/`
      - `dto/`: Defines the data transfer object of incoming requests and responses of the data model.
      - `tests/`: Contains the test cases.
      - `*.controller.ts`: Manage the data model routes.
      - `*.interface.ts`: Defines the interfaces used in the data model module.
      - `*.service.ts`: Contains the business logic of the data model module.
      - `*.module.ts`: Manage the data model dependencies.
  - `utils/`: Utility functions and helpers.
    - `decorators/`: Contains the decorators.
    - `filters/`: Contains the helper filters.
    - `guards/`: Contains the guard.
    - `pipes/`: Contains the parse data type pipes helper.

- `tests/`: Contains the test cases.
  - `fixtures/`: Fixtures for test cases.

- `.husky/`: Contains the pre and post commit scripts.

- `.env.*`: The environment variables file depends on the development environment.
- `.eslintrc.js`: The configuration file for ESLint.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `.dockerignore`: Specifies files and directories to be ignored by Docker.
- `.prettierrc`: The configuration file for Prettier.
- `docker-compose.yml`: The configuration file for Docker compose.
- `Dockerfile`: The series of configuration instructions on building a Docker image.
- `Makefile`: The set of multiple shell scripts as a new script.
- `nest-cli.json`: The configuration file for NestJS.
- `README.md`: Project documentation.
- `package.json`: Lists dependencies and scripts.
