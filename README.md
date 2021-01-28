# Deno REST API

A simple REST API starter kit implementation in [Deno](https://deno.land/)
environment using [OAK](https://oakserver.github.io/oak/) as middleware
framework.

The app contains basics CRUD operations managing a Book entity using at the
moment a simple Interface for modeling the REST Entity with read and write
operation in an array collection.

TODO: Add database and authentication support.

## Prerequisites

1. [Install Deno](https://deno.land/#installation)

### Shell (Mac, Linux):

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### PowerShell (Windows):

```sh
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

### Homebrew (Mac):

```sh
brew install deno
```

### Chocolatey (Windows):

```sh
choco install deno
```

### Scoop (Windows):

```sh
scoop install deno
```

### Build and install from source using Cargo

```sh
cargo install deno
```

2. Configure your IDE. I am using VSCode so I installed the
   [official Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
   from the Visual Studio Marketplace. Then I followed the setup instructions:

## Usage

Lint using Deno's built in linter

```sh
./scripts/lint.sh
```

Format using Deno's built in formatter

```sh
./scripts/format.sh
```

Start your server on port 5000

```sh
./scripts/run.sh
```

Compile into a single executable

```sh
./scripts/compile.sh
```

## LICENSE

MIT
