# Agentic SDLC

An editable presentation on Agentic DevSDLC

[View the slides](https://markharrison.uk/agentic-sdlc/) |

## After cloning

```powershell
npm install              # installs dependencies
npm run skills:install   # optional: includes agent skills
npm run dev              # starts the deck at http://localhost:3030
```

### npm registry

No registry switching is needed. The repo's [.npmrc](./.npmrc) only sets `package-lock=false`,
so no lockfile is created or committed. Each machine installs from its own configured registry:

- **Locally**, npm uses the registry in your user `~/.npmrc` (`%USERPROFILE%\.npmrc` on Windows),
  for example a corporate mirror such as `https://packagefeedproxy.microsoft.io/npm/`.
- **GitHub Actions** reads the repo's `.npmrc` to disable the lockfile; since it doesn't set a registry, npm uses the public registry, https://registry.npmjs.org.
